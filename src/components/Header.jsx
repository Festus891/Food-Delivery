import React, { useState } from "react";
import logo from "../img/logo.png";
import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      // console.log(response);
    } else {
      setIsMenu(!isMenu);
    }
  };
  const Logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen  p-3 px-4 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8  cursor-pointer"
          >
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
          </motion.ul>
          <div className="relative flex items-center justify-center ">
            {/* <MdShoppingCart /> */}
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            {" "}
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="user_avatar"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "festus4537@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap 3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base  ">
                      New item <MdAdd className="pl-1" />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center gap 3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base  ">
                  Logout <MdLogout className="pl-1" />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex  items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center ">
          {/* <MdShoppingCart /> */}
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>

        <div className="relative">
          {" "}
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="user_avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "festus4537@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap 3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base  ">
                    New item <MdAdd className="pl-1" />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col    cursor-pointer">
                <li className="text-base text-textColor  hover:text-headingColor duration-100 ease-in-out transition-all px-4 py-2 cursor-pointer hover:bg-slate-100">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all px-4 py-2 cursor-pointer hover:bg-slate-100">
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all px-4 py-2 cursor-pointer hover:bg-slate-100">
                  About Us
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all px-4 py-2 cursor-pointer  hover:bg-slate-100">
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center gap 3 cursor-pointer justify-center bg-gray-200  hover:bg-gray-300 transition-all duration-200 ease-in-out text-textColor text-base  "
                onClick={Logout}
              >
                Logout <MdLogout className="pl-1" />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
