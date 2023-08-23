import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route exact path="/" Component={<Home />} />
        <Route path="/About" Component={<About />} />
        <Route path="/Portfolio" Component={<Portfolio />} />
        <Route path="/Contact" Component={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
