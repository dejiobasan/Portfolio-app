import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesStyle from "./Particles";

function App() {
  return (
    <Router>
      <ParticlesStyle />
      <Sidebar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
