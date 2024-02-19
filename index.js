import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AboutClass from "./src/components/AboutClass";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import App from "./src/App";
import Home from "./src/components/Home";
import Restaurant from "./src/components/Restaurant"
const root = ReactDOM.createRoot( document.getElementById("root") );
/*
* App optimisation - all keywords have same meaning
* Chunking
* Code Splitting
* Lazy loading
* On demand loading
* Dynamic bundling
* Dynamic import
 */
const AboutClass = lazy( () => import("./src/components/AboutClass") );

const appRouter = createBrowserRouter([
    {
        path : "/" , 
        element : <App/> ,
        children : [
            {
                path : "/" , 
                element : <Home/>
            } ,
            {
                path : "/about" , 
                element : (
                    <Suspense fallback={ <h1>Loading...</h1> }>
                        <AboutClass/>
                    </Suspense>
                )
            } ,
            {
                path : "/contact" , 
                element : <ContactUs/>
            } ,
            {
                path : "/restaurant/:resId" , 
                element : <Restaurant/>
            }
        ] ,
        errorElement : <Error/>
    } ,
])
root.render( <RouterProvider router={ appRouter }/> );