import React from "react";
import { skills, socials } from "../../assets/assets";

export default function Contact() {
  return (
    <div 
      id="contact"
      className="flex flex-row gap-9 max-md:justify-between max-md:px-3 ml-[90px] max-md:ml-[0] py-7 w-[60%] max-md:w-full text-2xl max-md:text-sm items-center  "
    >
     {
      socials.map(
        (social)=>
          <a href={social.link}>
            <img src={social.icon} alt="" className="size-12 hover:opacity-70 "/>
          </a>
      )
     }
      {/* <div className="flex gap-10 justify-between p-5 w-full ">
            {socials.map((image)=>
            <div className="">
              <img src={image.image} alt="" className="size-24 floating"/>
              </div>
              )}
          </div> */}
    </div>
  );
}
