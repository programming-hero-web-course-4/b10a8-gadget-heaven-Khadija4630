import { NavLink,useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GadgetContext } from "../Routes/Root";
import { useContext } from "react";
const Navbar = ({textColor}) => {
    const links =<> 
    <li style={{ color: textColor }} className="hover:bg-[#09080F0D] "><NavLink to="/">Home</NavLink></li>
    <li style={{ color: textColor }}><NavLink to="/statistics" >Statistics</NavLink></li>
    <li style={{ color: textColor }}><NavLink to="/dashboard/:product_id">Dashboard</NavLink></li>
    <li style={{ color: textColor }}><NavLink to="/history">History</NavLink></li>
    </>

const{wishlist,cart}=useContext(GadgetContext);


const location = useLocation();
const isHomePage = location.pathname === "/";
    return (
        <div style={{ backgroundColor: isHomePage ? '#9538E2' : '#FFFFFF' }} className=" bg-[#9538E2] rounded-t-lg md:w-[1540px] w-full mx-auto">
            <div className="rounded-3xl  pb-5 ">  
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <NavLink style={{color:textColor}} to="/" className="btn btn-ghost text-xl text-white">Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 text-white font-bold ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
            <NavLink to="/dashboard/:product_id/cart" className="btn bg-white border rounded-full text-lg relative">
                            <IoCartOutline />
                            <div className="badge bg-white text-black badge-sm absolute -top-2 -right-2 py-1 text-sm">
                                {cart.length}
                            </div>
                        </NavLink>
                        <NavLink to="/dashboard/:product_id/wishlist" className="btn rounded-full bg-white border text-lg relative">
                            <FaRegHeart />
                            <div className="badge bg-white text-black badge-sm absolute -top-2 -right-2 py-1 text-sm">
                                {wishlist.length}
                            </div>
                        </NavLink>
            </div>
        </div>
    </div>
 </div>
    );
};

export default Navbar;