// import { useContext, useEffect } from "react";
// import Carts from "../Carts/Carts";
// import Navbar from "../Navbar/Navbar";
// import { GadgetContext } from "../Routes/Root";

// const Cart = () => {
//   const { cart} = useContext(GadgetContext);
//   useEffect(() => {
//     document.title = "Cart | GadgetHeaven";
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <div className="bg-purple-600 text-white py-5  rounded-xl">
//           {/* p"Cart"
//           p={
//             "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
//           }
//         */}
//       </div>

//       {/* card */}
//       <div className="flex justify-between items-center mt-10 ">
//         <h3 className="font-bold text-2xl">Your Carts Here</h3>
//       </div>
//       {cart.map((cart) => (
//         <Cart cart={cart} key={cart.product_id} />
//       ))}
//     </div>
//   );
// };

// export default Cart;

import  React from "react";

import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GadgetContext } from "../Routes/Root";
import { toast } from "react-toastify";
const msgInfo = {
  position: "top-center",
  autoClose : 5000 ,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const Cart = ({ carti, isRemove = false }) => {
  const { cart, setCart} = useContext(GadgetContext);

  const handleCartRemoved = (id) => {
    const filterAndRemove = cart.filter((item) => item.product_id !== id); // Updated to filter out item correctly
    console.log(filterAndRemove);
    setCart(filterAndRemove);
    toast.info("Successfully Remove Item ", msgInfo);
  };

  return (
    <div className="flex justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
      <div className=" gap-5 ">
        <div className="lg:w-[400px] lg:h-[500px]" >
          <img
            src={carti?.product_image}
            className="rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="space-y-3 flex justify-center flex-col">
          <h1 className="font-bold text-2xl">{carti?.product_title}</h1>
          <p>{carti?.description}</p>
          <span className="font-bold text-lg mt-5">
            Price: ${carti?.price}.00
          </span>
        </div>
      </div>

      <button
        onClick={() => handleCartRemoved(carti.product_id)}
        className={`cursor-pointer ${isRemove ? "hidden" : ""}`}
      >
        <FaDeleteLeft className="text-3xl text-red-500 mx-10  " />
      </button>
    </div>
  );
};

export default Cart;