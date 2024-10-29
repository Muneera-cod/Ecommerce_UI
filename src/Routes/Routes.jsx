import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/ui/Loading";
import ProductDetailsPage from "../Components/ui/SingleProductPage/ProductDetailsPage";
import Cart from "../Components/ui/Cart/Cart";
import StepOne from "../Components/ui/Cart/Checkout/Step1/StepOne";
import StepTwo from "../Components/ui/Cart/Checkout/Step2/StepTwo";
import StepThree from "../Components/ui/Cart/Checkout/Step3/StepThree";
const ProductPage=lazy(()=>import("../Components/ui/ProductPage/ProductPage"))
const Main=lazy(()=>import('../Components/Pages/Main'))
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}><Main/></Suspense>,
        children:[
        
           { 
            path:'/productPage',
            element:<Suspense fallback={<Loading/>}><ProductPage/></Suspense>,
            children:[
                {
                    path:'ProductDetails',
                    element:<ProductDetailsPage/>,
                   
                }
              
            ]
        },
        ,{
            path:'cart',
            element:<Cart/>,
        
        },   
        {
            path:'step1',
            element:<StepOne/>
        },
        {
            path:'step2',
            element:<StepTwo/>
        },
        {
            path:'step3',
            element:<StepThree/>
        }
    
       
        ]
    }
])


 // { 
        //     path:'/productPage',
        //     element:<Suspense fallback={<Loading/>}><ProductPage/></Suspense>
        // } // children:[
                    //     {
                    //         path:'cart',
                    //         element:<Cart/>
                    //     }
                    // ]