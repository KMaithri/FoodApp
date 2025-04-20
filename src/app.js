import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

// <Outlet/> gets replaced by the component requested
const AppLayout = () => {

    //  Updating loggedin user name declared in the context using <UserContext.Provider>
    const [userName,setUserName] = useState();
    useEffect(() => {
        const data = {
            name : "Maithri"
        }
        setUserName(data.name);
    },[])
    
 
    return(
        // connecting store and app
        <Provider store={appStore}>
        <UserContext.Provider value = {{loggedInUser:userName, setUserName}}>
        <div>
            
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

// lazy loading contact page will not be loaded unless it is being clicked. This helps to divide the js file into separate files unlike bundling

const Contact = lazy(() => import("./components/Contact"));


const About = lazy(() => import("./components/About"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        // children rotes
        children : [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element : <Suspense fallback = {
                    <Shimmer/>
                }>
                    <About/>
                </Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback = {
                    // <h1>Loading.........</h1>
                    <Shimmer/>
                }><Contact/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <ResInfo/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            }
        ],
        errorElement : <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);