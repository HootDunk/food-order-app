import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Chip from '@material-ui/core/Chip';
import CartPopUp from './CartPopUp';
import { useCartContext } from '../../store/cart-context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
  label: {
    fontSize: "1.2rem",
  }
}))


export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const cartCtx = useCartContext();
  console.log(cartCtx)
  const toggleIsOpen = () => {
    setIsOpen(prevOpen => !prevOpen)
  }

  return (
    <React.Fragment>
      <Button 
        onClick={toggleIsOpen}
        className={classes.root}
        startIcon={<ShoppingCartIcon />} 
        size="large" 
        variant="contained"
        >
          Your Cart
        <Chip size="small" className={`${classes.chip} ${classes.label}`} label={cartCtx.state.numItems} color="secondary"/>
      </Button>
      <CartPopUp isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
    </React.Fragment>

  )
}
