import { Box, Dialog, DialogContent, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useCartContext } from '../../store/cart-context';
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import CheckoutButtons from "./CheckoutButtons"
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  modal: {
    maxHeight: "550px",
    overflow:'scroll',
  }
}))

export default function CartPopUp({isOpen, toggleIsOpen}) {
  const classes = useStyles();
  const cartCtx = useCartContext();
  const { total, cartItems } = cartCtx.state;
  const [formIsOpen, setFormIsOpen] = useState(false);

  const toggleForm = () => {
    setFormIsOpen(prevOpen => !prevOpen);
  }

  const orderIsValid = cartItems.length > 0? true : false;

  return (
    <Dialog
      className={classes.modal}
      open={isOpen}
      onClose={toggleIsOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogContent className={classes.dialogContent}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography style={{fontWeight: 800}} variant="h5">
              Total:
          </Typography>
          <Typography style={{fontWeight: 800}} variant="h5">
              ${total.toFixed(2)}
          </Typography>
        </Box>
        {!formIsOpen && 
          <CheckoutButtons 
            left={{
              text: "Close",
              function: toggleIsOpen,
            }}
            right={{
              text: "Checkout",
              function: toggleForm,
              isDisabled: !orderIsValid,
            }}
          />
        }
        {formIsOpen && 
          <CheckoutForm 
            closeModal={toggleIsOpen} 
            orderIsValid={orderIsValid}/>
        }
      </DialogContent>
    </Dialog>
  )
}
