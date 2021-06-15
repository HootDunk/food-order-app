import React, { useReducer } from 'react';

// create default context
const CartContext = React.createContext({
  state: {
    cartItems: [],
    total: 0,
    numItems: 0,
  },
  addTocart: () => {console.log("hello")},
})

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      console.log(state)
      console.log("add item to cart => ", action.item)
      return state;
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


// https://dougschallmoser.medium.com/context-api-usereducer-in-react-2691c137f5f

// https://kentcdodds.com/blog/how-to-use-react-context-effectively


// Give the context with reducer another look over and try to get it working
// If you can't comment it out and just do context with normal state
// Can still do the same structure this way anyways
