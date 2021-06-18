# food-order-app [LIVE](https://hootdunk.github.io/food-order-app/)

This is the second project assigned in the course "React - The Complete Guide'.  Before following along and watching the instructor build out the project, I wanted to try creating the app on my own.  This repo is the result of that, and I'm happy with how it turned out.  Next, I'll review his implementation and see what I could have done differently/better.

Earlier in the course he demonstrated the Context API and created a context provider to handle the apps authentication.  This provider exposed the authentication state and a few functions to change the state to various components within the app. 

He also introduced the useReducer hook and demonstrated the advantages of using it when multiple pieces of state depend on one another and/or updates to state are relatively complex.  

I ended up using the useReducer hook and Context API together to create a context for the shopping cart which would handle updates to the actual shopping cart items (an array of objects containing item info), the total price of all the items in the cart, and the number of items in the cart.  It took some time to figure out how to setup Context and useReducer together ([this link](https://kentcdodds.com/blog/how-to-use-react-context-effectively) was a great resource) but once it was working I was immediately glad I'd taken the time.  Updates to state were easy to implement and triggering these updates throughout the app was 1 million times easier without having to rely on needless props drilling. 

We also learned about portals in the course and while I didn't use that here (portals are used in the app but they are an abstraction handled by material UI), it was interesting to learn about.  
