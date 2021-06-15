import { Button, Chip, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

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

export default function CartItem() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.layout}>
        <div>
          <Typography style={{fontWeight: 800}} variant="h5">
            Sushi
          </Typography>

          <Typography  color="secondary" variant="h6">
            $22.99
            <Chip label="x2" size="small" className={classes.chip}/>
          </Typography>
        </div>
        <div>
          <Button className={classes.plusAndMinus} variant="outlined">-</Button>
          <Button className={classes.plusAndMinus} variant="outlined">+</Button>
        </div>
      </div>
      <hr />
    </div>
  )
}
