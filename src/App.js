import React from "react"
import { Container } from "@material-ui/core"
import Header from "./Components/Layout/Header"
import MealsDescription from "./Components/Meals/MealsDescription"
import MealList from './Components/Meals/MealList'



function App() {
  return (
    <React.Fragment>
        <Header />
        <Container maxWidth="md">
          <MealsDescription />
          <MealList />
        </Container>
    </React.Fragment>
  );
}

export default App;
