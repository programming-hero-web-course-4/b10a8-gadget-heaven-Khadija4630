import React, { useState,useContext,useEffect } from 'react';
import { useLoaderData,useParams } from 'react-router-dom'; 
import {toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import { GadgetContext } from '../Routes/Root';
import Wishlist from '../Wishlist/Wishlist';
import Cart  from '../Cart/Cart';

const msgInfo = {
    position: "top-center",
    autoClose : 5000 ,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

const Dashboard = () => {
    const [isCart, isSetCart] = useState(true);
    const [sortPrice, setSortPrice] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const {
        cart,
        wishlist,
        handleAddToCart,
        setCart,
        setHistory,
      } = useContext(GadgetContext);

      const navigate = useNavigate();

      const handleCartBtn = () => {
        isSetCart(true);
      };
      const handleWishlistBtn = () => {
        isSetCart(false);
      };  

      const handleSortByPrice = () => {
        const sortByPrice = cart.sort((a, b) => b.price - a.price);
        setSortPrice(sortByPrice);
      };
    
      const totalPrice = cart.reduce((accum, product) => {
        return parseInt(accum + product.price);
      }, 0);
    
    
     const{product_id}=useParams();
     const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id);
    

      const removeFromCart = (index) => {
        const newCart = [...cart];
        const removedGadget = newCart.splice(index, 1)[0];
        setCart(newCart);
        setTotalCost((prevCost) => prevCost - removedGadget.price);
      };

      const handlePurchaseBtn = () => {
        sortPrice;
        isSetCart([]);
        toast.success("Successfully purchased your items ", msgInfo);
        document.getElementById("purchaseModel").showModal();
        setHistory((prev) => [...prev , ...cart]);
        setTotalCost((prev) => prev + totalPrice);
   
        
      };

      useEffect(() => {
        document.title = "Dashboard | GadgetHeaven ";
      }, []);
      console.log(totalPrice);

    return (
        <div>
            <div className="bg-[#9538E2] p-4 rounded-md mb-4 md:mb-8 text-white text-center ">
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-8">Dashboard</h2>
        <p className='mb-4 md:mb-8 text-center justify-center text-sm'>          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <button onClick={handleCartBtn} className={`  px-4 md:px-14 py-3 rounded-full text-[#9538E2] bg-[#9538E2]  border-white font-medium ${isCart ? "bg-white text-[#9538E2] font-medium" : "bg-transparent text-white"}`}>
            Cart
          </button>
          <button onClick={handleWishlistBtn} className={` border-white rounded-full px-4 py-3 md:px-14 ${isCart ? "bg-transparent text-white" : "bg-white text-[#9538E2] font-medium"}`}>
            Wishlist
          </button>
        </div>
            </div>
        
      <div className="md:mb-4 md:w-[90%]  mx-auto">
        <div className='flex md:justify-between justify-around space-x-4'>
        <p className='text-xl md:text-2xl font-bold'>Cart</p>
        
        <div className='mb-4  flex justify-around md:justify-between items-center md:space-x-4 space-x-2'>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Total Cost: ${totalCost.toFixed(2)}</h2>
        <button  onClick={handleSortByPrice}
                  disabled={totalPrice === 0 ? true : false}
                  className={`bg-[#FFFFFF] border-[#9538E2] text-[#9538E2] rounded-full px-4 ${sortPrice ? "bg-transparent text-[#9538E2] bg-white font-light md:font-medium ": "bg-[#9538E2] text-white font-medium "}`}>Sort by Price</button>
        <button  onClick={handlePurchaseBtn}
                  disabled={totalPrice === 0 ? true : false} className={`bg-[#9538E2]  border-[#9538E2] text-white rounded-full px-4  ${sortPrice ? "bg-[#9538E2] text-white font-medium ":"bg-transparent text-[#9538E2] bg-white "}`} >Purchase</button>
        </div>
        
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isCart ? (
            cart.map((gadget, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{gadget.product_id}</h3>
                <p>{gadget.description}</p>
                <p className="font-semibold">Price: ${gadget.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-2">Remove</button>
              </div>
            ))
          ) : (
            wishlist.map((gadget, index) => (
              <Wishlist key={index} gadget={gadget} handleAddToCart={handleAddToCart} />
            ))
          )}
        </div>
      </div>
      <dialog
        id="purchaseModel"
        className="modal modal-middle sm:modal-middle flex justify-center items-center text-center lg:px-0 px-3"
      >
        <div className="modal-box">
          <div className="flex justify-center items-center mt-4 mb-4">
            <img src="./assets/Group.png" className="w-20" alt="" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800">
            Payment Done Successfully
          </h3>

          <p className="py-4 font-semibold text-xl" id="errorId"></p>
          <h4 className="font-bold text-lg text-gray-800">
            Thanks for purchasing the Gadget.
          </h4>
          <span className="font-bold ">
            Total cost: ${totalCost}.00
          </span>
          <form method="dialog" className="mt-5">
            <button
              onClick={() => navigate("/")}
              className="btn  rounded-full font-bold w-full"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
      </div>
    );
};

export default Dashboard;