import React, { useState } from "react";
import "../../index.css";
import menu from "../../assets/menu.svg";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <div>
      <nav className=" fixed w-full flex flex-row justify-between px-[9%] py-5 mt-8 bg-white bg-opacity-30 md:text-[0.9rem] ">
        <h4 className=" p-4 rounded-lg  text-black font-extrabold text-xl self-center">
          Wisdom N<bold className="font-bold text-3xl text-red-50">..</bold>
        </h4>
        <ul className="flex gap-9 bg-gray-300 rounded-3xl bg-opacity-10 px-9 self-center p-3 max-lg:gap-4  max-md:hidden">
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
        <img
          src={menu}
          alt=""
          className="md:hidden ml-7 w-9 z-30 
          "
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        />

        {/* for mobile dropdown */}
        <div
          className={`md:hidden z-10 text-white  absolute right-9 top-[1.5rem] pt-4 h-auto bg-blue-950 transform transition-transform duration-1000  ${
            menuVisible
              ? " translate-x-[84%] pl-[3rem] rounded-xl "
              : "translate-x-[40%] pr-[7rem]"
          }`}
        >
          <div className="w-[80%] bg-white pt-1 pb-2">.</div>
          <ul className="flex flex-col gap-5 p-9 text-lg">
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
                projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:opacity-50">
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
