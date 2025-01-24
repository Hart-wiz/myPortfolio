import React from "react";
import { projects } from "../../assets/assets.js";

function Projects() {
  return (
    <>
      <div className=" pt-[9rem]">
        <div className="text-center">
          <h5 className="text-xl font-semibold">works</h5>
          <h2 className="font-black text-3xl p-3">latest Projects</h2>
        </div>

        <div className=" flex flex-col items-center pt-9 overflow-x-scroll">
          <ul id="projects" className=" flex gap-5 ">
            {projects.map((project) => (
              <li className="w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px] max-md:gap-8 ">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-[200px] max-md:h-[100px] "
                />
                <p className=" max-md:text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Projects;
