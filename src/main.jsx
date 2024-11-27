import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Components/Routes/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import Cart  from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Statistics from  './Components/Statistics/Statistics';
import { ToastContainer } from "react-toastify";
import History from './Components/History/History';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      
      },
      {
        path:'gadgets/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader:() => fetch('/gadgets.json')
      },

      {
        path:'/dashboard/:product_id',
        element:<Dashboard></Dashboard>,
        loader:() => fetch('/gadgets.json'),
        children:[
          {
            path:'/dashboard/:product_id/cart',
            element:<Cart></Cart>,
            loader:() => fetch('/gadgets.json'),
          },
          {
            path:'/dashboard/:product_id/wishlist',
            element:<Wishlist></Wishlist>,
            loader:() => fetch('/gadgets.json'),
            },
        ]
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/history',
        element:<History></History>
      }
  ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      pauseOnFocusLoss
    />
    <ToastContainer />
  </StrictMode>,
)
