import { useContext, useEffect } from "react";
import WishList from "../Wishlist/Wishlist";
import {GadgetContext } from "../Routes/Root";

const Wishlist = () => {
  const { wishList } = useContext(GadgetContext);
  
  useEffect(() => {
    document.title = "Wishlist | GadgetHeaven ";
  }, []);
  return (
    <div>
      <div className="bg-purple-600 text-white py-5  rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">History</h2>
      <p className="mb-6 mt-4 font-medium"> A wishlist captures dreams and desires, guiding loved ones to meaningful gifts and helping organize future goals"
    </p>
      </div>

      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">Your Wishlists Here</h3>
      </div>
      {wishList.map((wishlist) => (
        <Wishlist key={wishList.product_id} wishList={wishlist} />
      ))}
    </div>
  );
};

export default WishlistPage;