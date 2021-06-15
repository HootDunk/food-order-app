import { Box, Dialog, DialogContent, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import CartItem from "./CartItem"

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export default function CartPopUp({isOpen, toggleIsOpen}) {
  const classes = useStyles();
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
        <CartItem />
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography style={{fontWeight: 800}} variant="h5">
              Total:
          </Typography>
          <Typography style={{fontWeight: 800}} variant="h5">
              $88.63
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button 
            onClick={toggleIsOpen}
            variant="outlined"
          >Close</Button>
          <Button variant="outlined" color="primary">
            Order
          </Button>
        </Box>

      </DialogContent>

    </Dialog>
  )
}
