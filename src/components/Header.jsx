import React from "react";
import logo from "../img/logo.png";

function Header() {
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto cursor-pointer">
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all  cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all  cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all  cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all  cursor-pointer">
            Service
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;
