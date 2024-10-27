import { createBrowserRouter } from "react-router-dom";
import Home from '../Components/ui/Home/Home'
import Main from '../Components/Pages/Main'
import ProductPage from "../Components/ui/ProductPage/ProductPage";
export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
        
        { 
            path:'/productPage',
            element:<ProductPage/>
        }
        ]
    }
])