import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="max-w-7xl mx-auto h-[60px] flex justify-between items-center p-3">
      {/* LOGO */}
      <div>
        <h1 className="text-2xl font-bold text-slate-500 cursor-pointer">
          <Link to="/">
            WE<span className="text-slate-700">BUILD</span>
          </Link>
        </h1>
      </div>

      {/* MENU ICONS */}
      <div onClick={toggleMenu} className="lg:hidden z-10">
        {!showMenu ? (
          <RxHamburgerMenu size={30} />
        ) : (
          <AiOutlineClose size={30} className="text-white" />
        )}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`fixed top-0 right-0 w-[300px] md:w-[400px] h-screen bg-[#023047] text-white flex flex-col items-center justify-evenly text-xl transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact us
          </Link>
        </li>
      </ul>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex flex-col items-end text-[#023047]">
        <div className="flex items-center gap-2">
          <ImPhone />
          <h3 className="text-lg">020-1234-5671</h3>
        </div>
        <ul className="gap-8 text-lg flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
