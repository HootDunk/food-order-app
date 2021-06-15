import React from 'react'
import { Card, Box, Typography, makeStyles } from "@material-ui/core"
// import { Typography } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#626262",
    textAlign: "center",
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(18),
      marginRight: theme.spacing(18)
    },
  },
  content: {
    margin: theme.spacing(2),
  },
  body: {
    color: fade(theme.palette.primary.contrastText, 0.7)
  }

}))

export default function MealsDescription() {

  const classes = useStyles();

  return (
    <Box mx="auto">
      <Card className={classes.card} raised>
        <Typography className={classes.content} style={{fontWeight: 800}} variant="h4">
          Delicious Food, Delivered to You
        </Typography>
        <Typography className={`${classes.content} ${classes.body}`} variant="body1">
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        </Typography>
        <Typography className={`${classes.content} ${classes.body}`} variant="body1">
          All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
        </Typography>
      </Card>
    </Box>
  )
}
