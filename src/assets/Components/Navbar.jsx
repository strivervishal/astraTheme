import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-[100%] h-[10%] navbar flex flex-row justify-center items-center p-5 ">
      <div className="logo w-[20%]  relative">
        <span className="absolute text-[1.5rem] tracking-wide font-bold text-[#f6f0f0f5] uppercase left-8 top-[-1rem]">
          Astra
        </span>
      </div>
      <ul className="nav-links w-[50%] flex flex-row justify-center items-center gap-7 text-[#e2dedee4] text-sm font-medium ">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/TaskPage">TaskPage</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
      <div className="social-icons w-[30%] flex flex-row justify-center items-center gap-4 ">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[1.5px] border-[#dadada] "
        >
          <i className="ri-facebook-fill text-[#f8f4f4f1] p-[0.3rem] "></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[1.5px] border-[#dadada]"
        >
          <i className="ri-twitter-fill text-[#f8f4f4f1] p-[0.3rem] "></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[1.5px] border-[#fbfafa]"
        >
          <i className="ri-linkedin-fill text-[#f8f4f4f1] p-[0.3rem]"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
