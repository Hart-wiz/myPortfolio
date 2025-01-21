import React from "react";

import "../../../src/index.css";
import profile from "../../assets/assets.js";

function Header() {
  return (
    <>
      <div
        id="home"
        className=" text-white pt-[11rem] flex flex-col bg-gradient-to-l from-blue-300 to-blue-900 text-center self-center gap-3  max-sm:w-[100%]"
      >
        <img
          src={profile.image}
          alt=""
          className="w-[9rem] h-[10rem] rounded-full self-center    p-[0.3rem] bg-red-900 bg-opacity-50"
        />
        <h3 className="text-xl max-md:text-lg max-md:font-bold">
          Ndewo, I'm wisdom Njimogu
        </h3>
        <h1 className="text-5xl max-md:text-2xl max-md:font-bold font-semibold ">
          {profile.description}
          <br></br> based in {profile.country}
        </h1>
        <h3 className="sm:w-[450px] text-lg w-auto  self-center max-md:text-sm px-[2rem]">
          I am a web developer based in {profile.country} with over 3years of
          experience in {profile.skill}
        </h3>
        <div>
          <button className="m-9 max-md:m-3 border-black border-5 bg-slate-600 rounded-md p-3 text-white font-semibold">
            contact me now
          </button>
          <button
            className=" m-9 max-md:m-3 rounded-md p-3 
          border-red-800 font-bold text-black"
          >
            resume
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
