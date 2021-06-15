import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Cart from "../Cart/Cart"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(10)
    },
  },
  toolbar: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(14),
      paddingRight: theme.spacing(14),
      textAlign: 'left',
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: 800,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            ReactMeals
          </Typography>
          <Cart />
        </Toolbar>
      </AppBar>
    </div>
  );
}
