import React from "react";
import "../../index.css";

function Navbar() {
  return (
    <div>
      <nav className="fixed min-w-full opacity-9 border-b-4 pb-3 border-black flex lg:gap-[9rem] gap-6  justify-center max-md:justify-start max-md:flex-row max-md:p-7 mt-6 max-md:text-sm max-md:gap-0 max-md:border-none">
        <h4 className="text-yellow-800 font-extrabold text-xl  self-center">
          Wisdom N<bold>..</bold>
        </h4>
        <ul className="flex gap-9 self-center font-bold p-3 max-sm:gap-4 max-md:hidden">
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
        <button className="bg-gradient-to-tr from-black  to-white text-white text-sm font-semibold pl-3 pr-3 rounded-full hover:bg-gradient-to-tr hover:to-black  hover:from-white">
          contact me
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
