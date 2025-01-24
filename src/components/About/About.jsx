import React from "react";

import { profile } from "../../assets/assets.js";

function About() {
  return (
    <>
      <div id="about" className=" flex-col m-5">
        <div className="text-center">
          <h3 className="font-bold mt-[3rem]">Introduction</h3>
          <h1 className="mb-[3rem] font-bold text-3xl ">About me</h1>
        </div>
        <div className=" grid grid-cols-[1.5fr_repeat(3,1fr)] grid-rows-[1fr_2fr_0.5fr] gap-4 max-lg:flex max-lg:flex-wrap max-lg:justify-center ">
          <div className=" row-span-3 flex justify-center">
            <img
              src={profile.image}
              alt=""
              className=" rounded-3xl size-[370px]  border-black border-solid border-[3px]"
            />
          </div>
          <p className=" col-span-3  text-justify text-lg p-5 font-semibold">
            {profile.about}
          </p>
          <div className="border-gray-700 border-[3px] border-solid size-[200px] rounded-3xl ">
            <h2 className="font-bold text-xl text-pretty text-center pt-9  underline">
              Languages
            </h2>
            <ul className="list-disc flex flex-col items-center font-serif font-semibold">
              <li>Html</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="border-gray-700 border-[3px] border-solid  rounded-3xl size-[200px] ">
            <h2 className="font-bold text-xl text-pretty text-center pt-9  underline">
              Frameworks
            </h2>
            <ul className="list-disc flex flex-col items-center font-serif font-semibold">
              <li>reactjs</li>
              <li>nextjs</li>
              <li>tailwind</li>
              <li>postgresql & mongodb</li>
            </ul>
          </div>
          <div className="border-gray-700 border-[3px] border-solid  rounded-3xl size-[200px]  ">
            <h2 className="font-bold text-xl text-pretty text-center pt-9  underline">
              projects
            </h2>
            <ul className="list-disc flex flex-col items-center font-serif font-semibold">
              <li>over 9 projects </li>
              <li>close to 4 fullstack</li>
              <li>over 17 contributions </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
