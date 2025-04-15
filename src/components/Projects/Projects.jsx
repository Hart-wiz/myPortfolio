import React from "react";

function Projects({ title, projects }) {
  return (
    <>
      <div
        className="bg-black flex flex-col py-7 max-md:text-sm px-[8rem] max-md:px-0  text-white font-bold"
        id="projects"
      >
      
          <h2 className="font-black font-think text-xl text-center my-6 max-md:py-0 text-left pl-[5rem] max-md:pl-3 max-md:text-sm">
            {title}
          </h2>
        

 
          <ul className="flex justify-center flex-wrap gap-9 items-center  ">
            {projects.map((project) => (
              <a href={project.link} target="_blank" className="hover-float  ">
                <li className="size-[300px] ">
                <img
                  src={project.image}
                  alt=""
                  className=" w-full h-[200px] "
                />
                <p className="  text-blue-400 font-thick mt-5">{project.description}</p>
               
              </li>
              </a>
            ))}
          </ul>
      </div>
    </>
  );
}
export default Projects;
