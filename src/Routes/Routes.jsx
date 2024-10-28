import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/ui/Loading";
import ProductDetailsPage from "../Components/ui/SingleProductPage/ProductDetailsPage";
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
                    element:<ProductDetailsPage/>
                }
            ]
        },
        // { 
        //     path:'/productPage',
        //     element:<Suspense fallback={<Loading/>}><ProductPage/></Suspense>
        // }
        ]
    }
])