import bannerImg from '../../assets/banner.jpg';
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-white space-y-4 md:w-[1540px] w-full mx-auto bg-[#9538E2] md:gap-8 rounded-b-lg md:pb-40 pb-28 relative ">
        <h1 className="lg:text-5xl text-3xl mt-8 mb-2 font-bold md:w-[70%] w-[90%] ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="md:w-[50%] w-[75%]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <NavLink
          to={"/dashboard/:product_id"}
          className="btn bg-[#FFFFFF] text-[#9538E2] md:px-6 px-4 text-xl font-bold rounded-full "
        >
          Shop Now
        </NavLink>
      </div>
      <div className="w-[60%] mx-auto rounded-2xl p-5 border-2 border-slate-50 bg-[#09080F0d] absolute left-0 right-0 md:-bottom-20 -bottom-40 mb-32">
        <img
          src={bannerImg}
          className="rounded-xl w-full md:h-[450px] object-cover"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;