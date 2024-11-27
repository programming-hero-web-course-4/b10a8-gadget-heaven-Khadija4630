
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet,useLocation } from 'react-router-dom';
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


const msgInfo = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };


const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [history, setHistory] = useState([]);
     



    const handleAddToCart = (cartItem) => {
        setCart((prev) => [...prev, cartItem]);
        toast.success("Successfully Added to the Cart!", msgInfo);
        
      };


      const handleWishlist = (wishlistItem) => {
        const findTheWishlist = wishlist.find(
          (item) => item.product_id === wishlistItem.product_id
        );
        if (!findTheWishlist) {
          setWishlist((prev) => [...prev, wishlistItem]);
          toast.success("Successfully Added to the Wishlist!", msgInfo);
        } else {
          toast.error("Product Already Exists in the  Wishlist!", msgInfo);
        }
    
  
      };



      const location = useLocation();
      let backgroundColor = "#FFFFFF"; 
      let textColor="black";
  
      const isHomePage = location.pathname === "/";
      if (isHomePage) {
          backgroundColor = "#9538E2"; 
          textColor = "white";
        
      }

      const outerDiv = isHomePage ? 'pt-5 bg-[#09080F0d]' : '';

    return (
      <div className={outerDiv}>
      <div className="mx-auto xl:container w-11/12 bg-[#09080F0d]">
        <GadgetContext.Provider
          value={{
            handleAddToCart,
            handleWishlist,
            wishlist,
            cart,
            wishlist,
            setCart,
            history,
            setHistory,
          }}
        >
          <Navbar textColor={textColor} />
          <Outlet />
          <Footer />
        </GadgetContext.Provider>
      </div>
    </div>
    );
};

export const GadgetContext = createContext({
  cart: [],
  wishlist: [],
});
export default Root;