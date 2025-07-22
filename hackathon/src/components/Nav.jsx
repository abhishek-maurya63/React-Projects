import React from "react";
import star from "../assets/star.png";
import lock from "../assets/lock-alt-svgrepo-com.svg";
const Nav = () => {
  return (
    <nav className="w-[95vw] h-[3rem] rounded-[2rem] flex items-center justify-between overflow-hidden border-3 fixed top-[1rem] z-10 sm:w-[95vw] sm:h-[3rem]  ">
      <div className="flex items-center justify-center">
        <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-[50%] m-1 flex items-center justify-center sm:w-[2.5rem] sm:h-[2.5rem] ">
          <img src={star} alt="" />
        </div>
        <h1 className="text-2xl font-bold">wow</h1>
      </div>
      <div className="hidden md:flex w-[60%] p-0.5 items-center justify-center">
        <ul className="flex items-center justify-center gap-10">
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase ">
            Why to use
          </li>
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase">
            products
          </li>
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase">
            how to use
          </li>
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase">
            reviews
          </li>
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase">
            faq
          </li>
          <li className=" md:text-[.6rem] lg:text-[1rem] font-medium uppercase">
            articles
          </li>
        </ul>
      </div>
      <div className="w-[2.5rem] h-[2.5rem] bg-[#dcf5f1] rounded-[50%] m-1 flex items-center justify-center border-3 sm:w-[2.5rem] sm:h-[2.5rem] ">
        <img className="w-[2rem] h-[2rem] " src={lock} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
