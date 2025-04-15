import React from "react";

import { profile, skills } from "../../assets/assets.js";

function About() {
  return (
    <>
      <div id="about" className="animate flex-col m-5  text-white p-9 py-14">
        <div className="text-center">
          <h3 className="font-bold mt-[3rem]">Introduction</h3>
          <h1 className="mb-[3rem] font-bold text-3xl ">About me</h1>
        </div>
       
          <div className=" row-span-3 flex justify-between flex-col w-full ">
           
          <p className=" col-span-3  text-justify text-lg p-5 font-semibold text-white">
            {profile.about}
          </p>
          <div className="flex gap-10 justify-between p-5 w-full bg-white">
            {skills.map((image)=>
            <div className="">
              <img src={image} alt="" className="size-24"/>
              </div>
              )}
            
         
              
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
