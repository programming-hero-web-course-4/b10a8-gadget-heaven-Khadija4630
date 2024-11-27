import React,{useContext,useState} from "react";
import { useLoaderData,  useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GadgetContext } from "../Routes/Root";
import {toast} from 'react-toastify';


const GadgetDetails = () => {
  
  const { cart, setCart ,handleWishlist} = useContext(GadgetContext); 
  const { product_id } = useParams();
  const data = useLoaderData();
  const gadget = data.find((gadget) => gadget.product_id === product_id);

  if (!gadget) {
    return <p>Product is not found</p>; 
}

const [isAdded, setIsAdded] = useState(false);

const  handleAddToCart = (id) => {
  const gadgetToAdd = data.find((gadget) => gadget.product_id === id);
  setCart([...cart, gadgetToAdd]); 
  toast.info("Item added to cart!", { position: "top-center", autoClose: 5000 });
}

const handleAddTheWishlistBtn = (gadget) => {
  handleWishlist(gadget);
  toast.info("Item added to wishlist!", { position: "top-center", autoClose: 5000 });
  setIsAdded(true);
}


  return (
    <div className="relative h-screen mb-80 lg:mb-8 pb-5 Sora ">
      <div className="bg-[#9538E2] text-white py-5  lg:h-96 text-center ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-2">Product Details</h1>
        <p className="mb-6 mt-4">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:absolute top-0 bg-white right-0 left-0 lg:mx-40 lg:my-60 rounded-xl ml-2">
        <div className="p-10">
          <div className="p-5 rounded-xl border">
            <img
              className="rounded-2xl lg:w-[600px] lg:h-[450px] object-cover"
              src={gadget.product_image}
              alt={gadget.product_title}
            />
          </div>
        </div>

        <div className="flex flex-col lg:mt-10 space-y-3 ml-2 md:ml-0">
          <h1 className="text-2xl font-bold">{gadget.product_title}</h1>
          <span className="font-semibold text-lg">
            Price: ${gadget.price}.00
          </span>
          <div>
            <span
              disabled={true}
              className={`rounded-full text-sm p-1 px-4 ${
                gadget.availability
                  ? "bg-green-100 text-green-600 border border-green-500"
                  : "bg-red-100 text-red-600 border border-red-500"
              }`}
            >
              {gadget.availability ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <p className="text-gray-500">{gadget.description}</p>
          <div>
            <h4 className="font-bold">Specification:</h4>
            <ol className="text-gray-500 ml-2">
              {gadget.Specification.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <span>Rating:</span>
            <div className="flex items-center gap-1">
              <ReactStars
                count={5}
                size={30}
                value={gadget.rating}
                edit={false} 
                activeColor="#ffd700"
              />
              <span>{gadget.rating}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn rounded-full bg-[#9538E2] text-white"
            >
              Add to Cart <IoCartOutline className="text-xl" />
            </button>
            <button
              onClick={() => handleAddTheWishlistBtn(gadget)}
              disabled={isAdded}
              className="btn rounded-full text-lg text-black border bg-white"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
