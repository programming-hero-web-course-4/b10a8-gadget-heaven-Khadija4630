import { useContext, useEffect } from "react";
import { GadgetContext } from "../Routes/Root";
import Cart from "../Cart/Cart";

const History = () => {
  const { history } = useContext(GadgetContext);
  const totalPrice = history.reduce((accumulator, product) => {
    return parseInt(accumulator + product.price);
  }, 0);
  console.log(history);
  useEffect(() => {
    document.title = "History | GadgetHeaven ";
  }, []);
  return (
    <>
      <div>
        <div className="bg-[#9538E2] text-white py-5  text-center rounded-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">History</h2>
            <p className="mb-6 mt-4 font-medium">History records past events and cultures, preserving lessons, shaping identity, and guiding future decisions for societies worldwide.</p>
        </div>

        <div className="flex justify-between items-center mt-10 mb-8">
          <h3 className="font-bold lg:text-2xl">Your Purchase History:</h3>

          <div className="space-x-3 font-bold lg:text-xl">
            <span className="">Total cost: $({totalPrice})</span>
            <span>Count:({history.length})</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;