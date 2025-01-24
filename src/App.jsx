import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
