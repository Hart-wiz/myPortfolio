import React, { useState } from "react";
import "../../index.css";
import menu from "../../assets/menu.svg";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <div>
      <nav className=" fixed w-full flex flex-row justify-between px-[9%] py-6  md:text-[0.9rem] ">
        <h4 className=" p-4 rounded-lg  text-black bg-slate-100 bg-opacity-40 font-extrabold text-xl self-center">
          Wisdom N.
        </h4>
        <div className="flex">
        <ul className="flex gap-9 bg-gray-300 rounded-3xl bg-opacity-10 items-center text-white  px-3 max-lg:gap-4  max-md:hidden">
          <li>
            <a href="#home" className="hover:opacity-50">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-50">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:opacity-50">
              my projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-50">
              contact me
            </a>
          </li>
        </ul>
        <button className="bg-gradient-to-tr from-black  to-white text-white text-sm font-semibold pl-3 pr-3 rounded-full hover:bg-gradient-to-tr hover:to-black  hover:from-white border-none max-md:hidden">
          contact me
        </button>
        </div>
        <img
          src={menu}
          alt=""
          className="md:hidden ml-7 w-9 z-30 bg-slate-500 rounded-md 
          "
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        />

        {/* for mobile dropdown */}
        <div
          className={`md:hidden z-10 text-white  absolute right-9 top-[1.5rem] pt-4 h-auto bg-blue-950 transform transition-transform duration-1000  ${
            menuVisible
              ? " translate-x-[150%] pl-[3rem] rounded-xl  "
              : "translate-x-[40%] pr-[7rem]"
          }`}
        >
          <div className="w-[80%] bg-white pt-1 pb-2">.</div>
          <ul className="flex flex-col gap-5 p-9 text-lg">
            <li>
              <a
                href="#home"
                className="hover:opacity-50"
                onClick={() => {
                  setMenuVisible(!menuVisible);
                }}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:opacity-50"
                onClick={() => {
                  setMenuVisible(!menuVisible);
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:opacity-50"
                onClick={() => {
                  setMenuVisible(!menuVisible);
                }}
              >
                projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:opacity-50"
                onClick={() => {
                  setMenuVisible(!menuVisible);
                }}
              >
                contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
