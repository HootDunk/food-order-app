import { Button, Chip, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useCartContext } from '../../store/cart-context';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    justifyContent: "space-between",
  },
  chip: {
    marginLeft: theme.spacing(2),
    fontWeight: "900",
  },
  plusAndMinus: {
    fontWeight: "900",
    fontSize: "1.2rem",
    padding: "0",
  },
}))

export default function CartItem({item}) {
  const {name, price, amount, id} = item;
  const { dispatch } = useCartContext()

  const classes = useStyles()
  return (
    <div>
      <div className={classes.layout}>
        <div>
          <Typography style={{fontWeight: 800}} variant="h5">
            {name}
          </Typography>
          <Typography  color="secondary" variant="h6">
            ${price.toFixed(2)}
            <Chip label={`x${amount}`} size="small" className={classes.chip}/>
          </Typography>
        </div>
        <div>
          <Button onClick={() => dispatch({type: "DECREMENT_ITEM", id})} className={classes.plusAndMinus} variant="outlined">-</Button>
          <Button onClick={() => dispatch({type: "INCREMENT_ITEM", id})} className={classes.plusAndMinus} variant="outlined">+</Button>
        </div>
      </div>
      <hr />
    </div>
  )
}
