import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md bg-zinc-700 text-amber-50 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between py-2 px-6 md:px-10">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer">
          <Link to={"/"}>MyShop</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link to={"/"} className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="hover:text-blue-600">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="flex items-center gap-2">
              <FiShoppingCart />
              <span className="cart-total bg-blue-600 text-black text-xs px-2 py-0.5 rounded-full">
                10
              </span>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <CgClose /> : <CgMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-zinc-700  absolute w-full left-0 transition-all duration-300 ease-in flex-col  ${open ? " opacity-100" : "top-[-490px] opacity-0"
          }`}
      >

        <Link  className=" flex ml-7 mb-1 border-b-1 items-center py-5 text-center" to={"/"} onClick={() => setOpen(false)}>
          Home
        </Link>


        <Link  className=" flex ml-7 mb-1 border-b-1 items-center py-5 text-center" to={"/about"} onClick={() => setOpen(false)}>
          About
        </Link>


        <Link  className=" flex ml-7 mb-1 border-b-1 items-center py-5 text-center" to={"/products"} onClick={() => setOpen(false)}>
          Products
        </Link>


        <Link  className=" flex ml-7 mb-1 border-b-1 items-center py-5 text-center" to={"/contact"} onClick={() => setOpen(false)}>
          Contact
        </Link>

        <Link className=" flex ml-7 mb-1  items-center py-5 text-center">
          <FiShoppingCart />
          <span className="cart-total bg-blue-600 text-black text-xs px-2 py-0.5 rounded-full">
            10
          </span>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
