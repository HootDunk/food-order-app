import { Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Chip from '@material-ui/core/Chip';
import CartPopUp from './CartPopUp';
import { useCartContext } from '../../store/cart-context';

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  label: {
    fontSize: "1.2rem",
  },
  bumpAnimation: {
    animation: `$bump 300ms ease-out`,
  },
  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)"
    },
    "30%": {
      transform: "scale(1.1)"
    },
    "50%": {
      transform: "scale(1.15)"
    },
    "100%": {
      transform: "scale(1)"
    }
  },
}))


export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);
  const classes = useStyles();
  const cartCtx = useCartContext();
  
  const { numItems } = cartCtx.state;
  
  
  useEffect(() => {
    if (numItems === 0) return;
    setBtnIsAnimated(true);

    const timer = setTimeout(() => {
      setBtnIsAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }
    // didn't need to add btnIsAnimated because you don't refer to that data.  You only set it based on other data.
  }, [numItems])
  
  const toggleIsOpen = () => {
    setIsOpen(prevOpen => !prevOpen)
  }

  return (
    <React.Fragment>
      <Button 
        onClick={toggleIsOpen}
        className={btnIsAnimated? classes.bumpAnimation : ""}
        startIcon={<ShoppingCartIcon />} 
        size="large" 
        variant="contained"
        >
          Your Cart
          <Chip
            className={`${classes.chip} ${classes.label}`}
            size="small" 
            label={cartCtx.state.numItems} 
            color="secondary"
          />
      </Button>
      <CartPopUp isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
    </React.Fragment>

  )
}
