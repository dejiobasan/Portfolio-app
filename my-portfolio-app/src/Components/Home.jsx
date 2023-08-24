import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Jump from "react-reveal/Jump";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="image">
          <Fade left>
            <img
              src="../Images/Deji-image.jpeg"
              className="deji-picture"
              alt="Dejiimage"
              width="500px"
              height="500px"
            />
          </Fade>
        </div>
        <div className="intro">
          <Jump>
            <h1 className="header">Hi, I'm Deji a full-stack web developer.</h1>
            <p className="content">
              Software Developer || Full-stack Developer ||
              Electrical/Electronics Engineer || Part-time Anime Watcher
            </p>
          </Jump>
          <Link className="btn1" to="/Contact" role="button">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
