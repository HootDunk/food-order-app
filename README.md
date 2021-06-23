# food-order-app

This project covers the second and third assignments from the Udemy course "React - The Complete Guide".    Before following along and watching the instructor build out the project, I wanted to try creating the app on my own.  This repo is the result of that, and I'm happy with how it turned out.


## Part 1 (Assignment 2)
Creating the UI

Earlier in the course he demonstrated the Context API and created a context provider to handle an apps authentication.  This provider exposed the authentication state and a few functions to change the state to various components within the app. 

He also introduced the useReducer hook and demonstrated the advantages of using it when multiple pieces of state depend on one another and/or updates to state are relatively complex.  

I ended up using the useReducer hook and Context API together to create a context for the shopping cart which would handle updates to the actual shopping cart items (an array of objects containing item info), the total price of all the items in the cart, and the number of items in the cart.  It took some time to figure out how to setup Context and useReducer together ([this link](https://kentcdodds.com/blog/how-to-use-react-context-effectively) was a great resource) but once it was working I was immediately glad I'd taken the time.  Updates to state were easy to implement and distributing the state throughout the app was 1 million times easier without having to rely on needless props drilling.

Some other concepts covered thus far include the useEffect hook, Portals, and Refs.  Because I am using Material UI in the application, I didn't have to manually implement Portals but I was happy to find that they are implemented in the Modal component and any component composed of the Modal (in our case, the Dialog component).

## Part 2 (Assignment 3)
Adding Forms & HTTPs

A lot of ground was covered between assignment 2 and assignment 3.  The instructor went into more detail about how React works and connected this to certain optimization functions and when to use them.  He demonstrated React.memo(), useCallback(), and useMemo() which can help eliminate unnecessary re-evaluations of components for certain situations.  

He also demonstrated custom React hooks and provided a practical example of using a custom hook for http requests (see use-https.js in src/hooks/).  This greatly helped with re-use and I opted to use it in the project.
For working with form data, he demonstrated the use-input hook which helped manage an inputs state and update the UI with validation help at a time that made sense.  The addition of these two hooks constitutes most of the changes in the app for this part.  I look forward to finding opportunities to use custom hooks in the future as they really help simplify state re-use. 
