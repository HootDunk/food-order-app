import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
import MealItem from './MealItem'
import { menuData } from '../../MenuData';
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
}))

export default function MealList() {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      {menuData.map(item => <MealItem key={item.id} item={item}/>)}
    </Card>
  )
}
