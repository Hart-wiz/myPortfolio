import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { projects } from "../src/assets/assets.js";
import { latest } from "../src/assets/assets.js";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <h5 className="text-xl font-semibold mt-[8rem] text-center">works</h5>
      <Projects title={"latest projects"} projects={latest} />
      <Projects title={"projects"} projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
