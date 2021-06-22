import { Box, Button, Dialog, DialogContent, makeStyles, Typography, LinearProgress } from '@material-ui/core'
import React from 'react'
import { useCartContext } from '../../store/cart-context';
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import CheckoutButtons from "./CheckoutButtons"
import { useState } from 'react';
import useHttps from "../../hooks/use-https"

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

  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const {isLoading, error, sendRequest: submitMenuItems} = useHttps()

  const toggleIsCheckout = () => {
    setIsCheckout(prevOpen => !prevOpen);
  }

  // send in the order and reset the state if the data is valid
  const handleSubmit = (userData) => {
    !didSubmit && setDidSubmit(true);
    submitMenuItems(
      {
        url: 'https://react-http-9c0b8-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: {
          orderedItems: cartCtx.state.cartItems,
          user: userData
        },
        headers: {
          'Content-Type': 'application/json',
        }
      },
      (data) => {
        cartCtx.dispatch({type: "RESET"})
        setIsCheckout(false)
      } 
    )
  }

  const orderIsValid = cartItems.length > 0? true : false;

  let content;

  if (!didSubmit){
    content = (
      <React.Fragment>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography style={{fontWeight: 800}} variant="h5">
              Total:
          </Typography>
          <Typography style={{fontWeight: 800}} variant="h5">
              ${total.toFixed(2)}
          </Typography>
        </Box>
        {!isCheckout && 
          <CheckoutButtons 
            left={{
              text: "Close",
              function: toggleIsOpen,
            }}
            right={{
              text: "Checkout",
              function: toggleIsCheckout,
              isDisabled: !orderIsValid,
            }}
          />
        }
        {isCheckout && 
          <CheckoutForm 
            closeModal={toggleIsOpen} 
            orderIsValid={orderIsValid}
            handleSubmit={handleSubmit}
          />
        }
      </React.Fragment>
      )
  }
  else if (didSubmit){
    if (isLoading){
      content = (
        <Box textAlign="center" p={2}>
          <Box mb={2}>
            <Typography variant="h4">Sending Your Order...</Typography>
          </Box>
          <LinearProgress />
        </Box>
      )
    }
    else if (error){
      content = (
        <Box textAlign="center" p={1}>
          <Typography variant="h4">Something Went Wrong...</Typography>
          <Typography variant="body1">{error}</Typography>
          <Box m={2}>
            <Button 
              onClick={handleSubmit}
              variant="contained" 
              color="primary"
            >
              Click Here to Resend
            </Button>
          </Box>
        </Box>
      )
    }
    else {
      content = (
        <Box textAlign="center" p={2}>
          <Box mb={2}>
            <Typography variant="h4">Order Successfully Sent</Typography>
          </Box>
        </Box>
      )
    }
  }


  return (
    <Dialog
      className={classes.modal}
      open={isOpen}
      onClose={didSubmit?
        () => 
          {
            toggleIsOpen()
            setDidSubmit(false);
          } 
        : toggleIsOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogContent className={classes.dialogContent}>
        {content}
      </DialogContent>
    </Dialog>
  )
}
