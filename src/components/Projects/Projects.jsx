import React from "react";

function Projects({ title, projects }) {
  return (
    <>
      <div
        className="animate-dark flex flex-col py-[3rem] max-md:py-2 max-md:text-sm px-[8rem] max-md:px-0  text-white font-bold"
        id="projects"
      >
        <div className="text-center ">
          <h2 className="font-black font-think text-xl text-center p-3 max-md:py-0 text-left pl-[5rem] max-md:pl-3 max-md:text-sm">
            {title}
          </h2>
        </div>

        <div className=" flex flex-col items-center pt-9 max-md:pt-3   max-md:text-sm">
          <ul className="flex gap-5">
            {projects.map((project) => (
              <a href={project.link} target="_blank" className="hover-float">
                <li className="w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px] max-md:gap-8 ">
                <img
                  src={project.image}
                  alt=""
                  className=" w-full h-[200px] max-md:h-[100px]"
                />
                <p className=" max-md:text-sm text-blue-400 font-thick mt-5">{project.description}</p>
               
              </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Projects;
