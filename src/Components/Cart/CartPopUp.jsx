import { Box, Dialog, DialogContent, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useCartContext } from '../../store/cart-context';
import CartItem from "./CartItem"

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export default function CartPopUp({isOpen, toggleIsOpen}) {
  const classes = useStyles();
  const cartCtx = useCartContext();
  const { total, cartItems } = cartCtx.state;


  return (
    <Dialog
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
        <Box display="flex" justifyContent="flex-end">
          <Button 
            onClick={toggleIsOpen}
            variant="outlined"
          >Close</Button>
          <Button
            disabled={cartItems.length === 0? true : false}
            variant="outlined" 
            color="primary"
          >
            Order
          </Button>
        </Box>

      </DialogContent>

    </Dialog>
  )
}
