import { useContext, useEffect } from "react";
import Cart from "../Carts/Carts";
import Navbar from "../Navbar/Navbar";
import { GadgetContext } from "../Routes/Root";

const Carts = () => {
  const { cart} = useContext(GadgetContext);
  useEffect(() => {
    document.title = "Cart | GadgetHeaven";
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-[#9538E2] text-white py-5 rounded-xl">
        <p>Cart</p>
        <p> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    </p>
      </div>
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">Your Carts Here</h3>
      </div>
      {cart.map((cart) => (
        <Cart cart={cart} key={cart.product_id} />
      ))}
    </div>
  );
};

export default Carts;
