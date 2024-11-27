import { FaDeleteLeft } from "react-icons/fa6";
import  React from "react";

import { useContext } from "react";
import { GadgetContext } from "../Routes/Root";
import { toast } from "react-toastify";
import { useLoaderData,useParams } from "react-router-dom";
const msgInfo = {
  position: "top-center",
  autoClose : 5000 ,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const Wishlist = ({  isRemove = false }) => {
 const { wishlist, setWishlist} = useContext(GadgetContext);

  const handleWishlistRemoved = (id) => {
    const updatedWishlist = wishlist.filter((item) => {
      return item.product_id !== id;
    });
    setWishlist(updatedWishlist);
    toast.info("Successfully Removed the Item ", msgInfo);
  };
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
    {wishlist.map((item) => (
      <div key={item.product_id} className="flex lg:flex-row flex-col gap-5">
        <div className="lg:w-[400px] lg:h-[500px]">
            <img
              src={item.product_image}  
              className="rounded-xl w-full  object-cover border-gray-200"
              alt={item.product_title}  />
          </div>
        <div className="space-y-3 flex items-center flex-col">
          
          <h1 className="font-bold text-2xl">{item.product_title}</h1> 
          <p>{item.description}</p> 
          <span className="font-bold text-lg mt-5">
            Price: ${item.price}.00 
          </span>
          <button className="btn w-fit rounded-full text-white bg-purple-600 px-7">
            Add To Cart
          </button>
        </div>
        <button
          onClick={() => handleWishlistRemoved(item.product_id)}  
          className={`cursor-pointer ${isRemove ? "hidden" : ""}`}
        >
          <FaDeleteLeft className="text-3xl text-red-500 mx-10 lg:float-start float-right" />
        </button>
      </div>
    ))}
  </div>
  )
};  

export default Wishlist;