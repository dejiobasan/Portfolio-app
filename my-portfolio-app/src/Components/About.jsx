import React from "react";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

function About() {
  return (
    <div>
      <div className="container">
        <div className="about-content">
          <Fade top>
            <h1 className="header2">About me</h1>
            <p>
              I'm a Software Engineer with years of experience building
              web-based applications and in my spare time i watch alot of Anime.
              I hold a First class (Honours) Bachelor’s Degree in
              Electrical/Electronics Engineering. Additionally, I am proficient
              in HTML, CSS (Bootstrap), JavaScript, Material UI, and Reactjs for
              frontend development, and have experience with Nodejs, Expressjs
              and Python for backend development. I am a skilled full-stack
              developer and open to opportunities that would enable me work on
              diverse projects and support the vision of the company to deliver
              exceptional service without compromising standards. I'm confident,
              hardworking and very open to learning.
            </p>
          </Fade>
        </div>
        <Roll right>
          <div className="tech-stack">
            <p className="backend-stack">Backend Stack & Database:</p>
            <img
              src="../Logos/node.png"
              alt="nodejs"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/python.jpeg"
              alt="python"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/js.png"
              alt="javascript"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/mongodb.png"
              alt="mongodb"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/firebase.png"
              alt="firebase"
              width="80px"
              height="80px"
            />

            <p className="frontend-stack">Frontend Stack:</p>
            <img
              src="../Logos/html, css.png"
              alt="html/css"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/bootstrap.jpeg"
              alt="bootstrap"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/React.png"
              alt="React"
              width="80px"
              height="80px"
            />
            <img
              src="../Logos/js.png"
              alt="javascript"
              width="80px"
              height="80px"
            />
          </div>
        </Roll>
      </div>
    </div>
  );
}

export default About;
