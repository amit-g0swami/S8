import React from "react";
import Logo from "../../assets/logo.png";
import {AiOutlineBars} from "react-icons/ai";
import {FaTimes} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";

export const navigation = ["Home", "About", "Services"];

export default function Navigation() {
  const toggleNavigation = () => {
    document.getElementById("navBar").classList.toggle("-translate-x-full");
  };

  return (
    <div className="w-ful border-b flex bg-gradient-to-r from-[#fef6ed] to-[#fdd4ee] px-10 lg:px-14 justify-between">
      <div className=" flex items-center py-2">
        <div className="pr-4 flex lg:hidden">
          <AiOutlineBars onClick={toggleNavigation} size="20" />
        </div>
        <img src={Logo} />
      </div>
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <ul className="flex">
          {navigation.map((item) => (
            <li key={item} className="px-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className=" justify-center items-center flex">
        <h1>
          <CgProfile size="25" />
        </h1>
      </div>

      <div
        id="navBar"
        className="absolute -translate-x-full lg:hidden transition ease-in-out duration-200 w-full h-full flex justify-center items-center left-0 top-0 bg-white">
        <button className="absolute top-20 right-20">
          <FaTimes onClick={toggleNavigation} size={20} />
        </button>
        <ul className="flex flex-col">
          {navigation.map((item) => (
            <li key={item} className=" text-xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
