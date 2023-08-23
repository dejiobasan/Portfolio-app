import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="image">
          <img
            src="./publi/Images/Deji-image.jpeg"
            className="deji-picture"
            alt="Dejiimage"
            width="500px"
            height="500px"
          />
        </div>
        <div className="intro">
          <h1 className="header">Hi, I'm Deji a full-stack web developer.</h1>
          <p className="content">
            Software Developer || Full-stack Developer || Electrical/Electronics
            Engineer
          </p>
          <Link className="btn1" to="/Contact.html" role="button">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
