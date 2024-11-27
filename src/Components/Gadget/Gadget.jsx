import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
const {product_id, product_title, product_image, price } = gadget;
return (
    <div className=" md:w-[322.67px] w-[90%] md:h-[380px] rounded-3xl p-4 bg-white ">
        <div className=" border-2 border-gray-100 rounded-2xl mb-3">
            <img
            src={product_image}
            alt="product_image"
            className="md:w-[283px]  md:h-[181px] rounded-xl"
        />
        </div>
    <div>
        <h2 className="font-semibold text-2xl text-black p-1">
            {product_title}
        </h2>
        <p className="text-gray-500 font-medium text-xl p-1">Price:{price}tk</p>
        <Link to={`/gadgets/${gadget.product_id}`}>
            <button className="border-2 border-purple-600 text-[#9538E2] font-semibold text-lg rounded-full bg-white mt-2 p-2">
            View Details
            </button>
        </Link>
    </div>
    </div>
  );
};

export default Gadget;
