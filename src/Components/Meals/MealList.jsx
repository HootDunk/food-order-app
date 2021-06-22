import { Card, makeStyles, LinearProgress, Box, Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import MealItem from './MealItem'
import useHttps from '../../hooks/use-https';
import { Typography } from '@material-ui/core';
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
  const [menuItems, setMenuItems] = useState([]);
  const {isLoading, error, sendRequest: getMenuItems} = useHttps()

  const transformMenuItems = (data) => {
    const loadedMenuItems = [];
  
    for (const menuKey in data){
      loadedMenuItems.push({ id: menuKey, ...data[menuKey] })
    }
    setMenuItems(loadedMenuItems)
  };
  
  useEffect(() => {
    getMenuItems(
      {url: "https://react-http-9c0b8-default-rtdb.firebaseio.com/meals.json"},
      transformMenuItems
    )
  }, [getMenuItems])

  let content;
  if (error){
    content = (
      <Box textAlign="center" p={1}>
        <Typography variant="h4">Something Went Wrong...</Typography>
        <Typography variant="body1">{error}</Typography>
        <Box m={2}>
          <Button 
            onClick={() => getMenuItems(
              {url: "https://react-http-9c0b8-default-rtdb.firebaseio.com/meals.json"},
              transformMenuItems)
            }
            variant="contained" 
            color="primary"
          >
            Click Here to Reload
          </Button>
        </Box>
      </Box>
    )
  }
  else if (isLoading){
    content = (
      <Box textAlign="center" p={2}>
        <Box mb={2}>
          <Typography variant="h4">Menu is Loading...</Typography>
        </Box>
        <LinearProgress />
      </Box>
    )  
  }
  else if (menuItems.length){
    content = menuItems.map(item => <MealItem key={item.id} item={item}/>);
  }
  
  
  return (
    <Card className={classes.card} raised>
      {content}
    </Card>
  )
}
