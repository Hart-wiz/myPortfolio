import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { projects } from "../src/assets/assets.js";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects title={"projects"} projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
