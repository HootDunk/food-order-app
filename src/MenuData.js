
// consider making menuData a context thing?
  // could use the json server to load in
  // the menu data and create a menuContext
  // to pass it through the app
const menuData = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german Speciality",
    price: 16.50
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: 4,
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99
  },
]


export { menuData }

// I think use Json Server to create a menu-context

// Then use the useReducer pattern to create the cart information

// cart info is needed for both the cart modal and the menu card -> definitely
  // make it into a context.  Consider reducer pattern.


// could place order data and menu data in one context.