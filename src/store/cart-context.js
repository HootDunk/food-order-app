import React, { useReducer } from 'react';

// create default context
const CartContext = React.createContext({
  state: {
    cartItems: [],
    total: 0,
    numItems: 0,
  },
  dispatch: () => {},
})

const calculateTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + (item.amount * item.price), 0)
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART': {
      let cartItemsCopy = [...state.cartItems]
      const {item, amount} = action;
      const index = cartItemsCopy
        .findIndex(stateItem => stateItem.id === item.id);
      if (index !== -1){
        let copy = {...cartItemsCopy[index]}
        copy = {...copy, amount: copy.amount += amount }
        cartItemsCopy[index] = copy;
      }
      else {
        let newItem = {...item, amount: amount}
        cartItemsCopy = [...cartItemsCopy, newItem];
      }

      return {
        total: calculateTotal(cartItemsCopy),
        cartItems: cartItemsCopy,
        numItems: state.numItems + amount,
      };
    }
    case "DECREMENT_ITEM": {
      const { id } = action;
      let itemsCopy = [...state.cartItems]
      const index = itemsCopy.findIndex(item => item.id === id);
      const item = {...itemsCopy[index]}
      item.amount -= 1;
      if (item.amount === 0) ;
      item.amount === 0? 
        itemsCopy.splice(index, 1)
        : 
        itemsCopy[index] = item;
        
      return {
        total: calculateTotal(itemsCopy),
        cartItems: itemsCopy,
        numItems: state.numItems - 1,
      };
    }
    case "INCREMENT_ITEM": {
      const { id } = action;

      let itemsCopy = [...state.cartItems]
      const index = itemsCopy.findIndex(item => item.id === id);
      const item = {...itemsCopy[index]}
      item.amount += 1;
      itemsCopy[index] = item;
    
      return {
        total: calculateTotal(itemsCopy),
        cartItems: itemsCopy,
        numItems: state.numItems + 1,
      };
    }
    case "RESET": {
      return {
        total: 0,
        cartItems: [],
        numItems: 0,
      }
    }
    default:
      throw new Error(`Undhandled action type : ${action.type}`)
  }
}

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {cartItems: [], total: 0, numItems: 0,})
  const value = {state, dispatch};


  return (
		<CartContext.Provider
			value={value}
		>
			{props.children}
		</CartContext.Provider>
	)
}

function useCartContext() {
  const context = React.useContext(CartContext);
  if(context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }

  return context;
}


export { useCartContext }

// A few references used for setting up cart-context
// https://dougschallmoser.medium.com/context-api-usereducer-in-react-2691c137f5f
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

