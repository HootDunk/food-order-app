import { Box, Button, Typography, TextField } from '@material-ui/core';
import { useCartContext } from "../../store/cart-context"
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  itemLayout: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  right: {
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between"
  },
  chip: {
    padding: '10px', 
    marginLeft: '5px'
  }
}))

export default function MealItem({ item }) {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const cartCtx = useCartContext();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    cartCtx.dispatch({type: "ADD_ITEM_TO_CART", item: item, amount: amount})
    setAmount(0)
  }

  
  return (
    <div className={classes.wrapper}>
      <div className={classes.itemLayout}>
        <div>
          <Typography variant="h5">
            {item.name}
          </Typography>
          <Box fontStyle="italic">
            <Typography variant="body1">
              {item.description}
            </Typography>
          </Box>
          <Typography color="secondary" variant="h6">
            ${(item.price).toFixed(2)}
          </Typography>
        </div>
        <div>
          <form 
            onSubmit={(e) => handleSubmit(e)}
            className={classes.right}>
            <TextField
              required
              onChange={(e) => setAmount(+e.target.value)}
              value={amount === 0 ? "" : amount}
              label="amount"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 5} }}
            />
            <Button 
              type="submit"
              variant="contained" 
              color="secondary"
            >
              + Add
            </Button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  )
}
