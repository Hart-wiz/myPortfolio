import React from "react";

import { profile, skills } from "../../assets/assets.js";

function About() {
  return (
    <>
      <div id="about" className="animate-dark flex-col m-5 text-white p-9 max-md:m-0 max-md:p-0 max-md:py-0 py-14">
        <div className="text-center">
          <h3 className="font-bold mt-[3rem]">Introduction</h3>
          <h1 className="mb-[3rem] font-bold text-3xl ">About me</h1>
        </div>
       
          <div className=" row-span-3 flex justify-between flex-col w-full w-[70%] max-md:w-full  ">
           
          <p className=" col-span-3  text-justify text-lg p-5 font-semibold text-white max-md:text-sm max-md:font-thin">
            {profile.about}
          </p>
  
          <div className="flex justify-between  w-full   ">
            {skills.map((image)=>
           
              <img src={image} alt="" className="size-24 floating max-md:size-10"/>
             
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
