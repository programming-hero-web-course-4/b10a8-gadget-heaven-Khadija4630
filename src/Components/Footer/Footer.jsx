
const Footer = () => {
  return (
    <footer className=" bg-[#09080F0D] md:p-10 md:pt-28">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold mb-3 pt-5">Gadget Heaven</p>
      <p className="text-[#09080F99] font-medium">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr className=" mx-auto mb-5"/>
      <div className="footer container md:mx-auto text-slate-800 font-medium justify-around  items-center ">
        <nav >
          <h6 className=" text-xl md:text-2xl font-bold mt-2 text-[#09080F]">Services</h6>
         <a className="link link-hover  text-[#09080F99] ">Products Support</a>
          <a className="link link-hover  text-[#09080F99] ">Order Tracking</a>
          <a className="link link-hover  text-[#09080F99] ">Shipping & Delivery</a>
          <a className="link link-hover  text-[#09080F99] ">Returns</a>
        </nav>
        <nav >
          <h6 className="text-xl md:text-2xl font-bold text-[#09080F]">Company</h6>
          <a className="link link-hover text-center text-[#09080F99] ">About Us</a>
          <a className="link link-hover text-center text-[#09080F99] ">Careers</a>
          <a className="link link-hover text-center text-[#09080F99] ">Contact</a>
          
        </nav>
        <nav>

          <h6 className="text-xl md:text-2xl font-bold text-[#09080F]">Legal</h6>
          <a className="link link-hover text-center text-[#09080F99]">Terms of Service</a>
          <a className="link link-hover text-center text-[#09080F99] ">Privacy Policy</a>
          <a className="link link-hover text-center text-[#09080F99] ">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

