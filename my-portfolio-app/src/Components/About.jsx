import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <div className="about-content">
          <h1 className="header2">About me</h1>
          <p>
            I'm a Software Engineer with years of experience building web-based
            applications. I hold a First class (Honours) Bachelor’s Degree in
            Electrical/Electronics Engineering. Additionally, I am proficient in
            HTML, CSS (Bootstrap), JavaScript, Material UI, and Reactjs for
            frontend development, and have experience with Nodejs, Expressjs and
            Python for backend development. I am a skilled full-stack developer
            and open to opportunities that would enable me work on diverse
            projects and support the vision of the company to deliver
            exceptional service without compromising standards. I'm confident,
            hardworking and very open to learning.
          </p>
        </div>
        <div className="tech-stack">
          <p className="backend-stack">Backend Stack & Database:</p>
          <img src="./public/Logos/node.png" alt="nodejs" width="80px" height="80px" />
          <img
            src="./public/Logos/python.jpeg"
            alt="python"
            width="80px"
            height="80px"
          />
          <img
            src="./public/Logos/js.png"
            alt="javascript"
            width="80px"
            height="80px"
          />
          <img
            src="./public/Logos/mongodb.png"
            alt="mongodb"
            width="80px"
            height="80px"
          />
          <img
            src="./public/Logos/firebase.png"
            alt="firebase"
            width="80px"
            height="80px"
          />

          <p className="frontend-stack">Frontend Stack:</p>
          <img
            src="./public/Logos/html, css.png"
            alt="html/css"
            width="80px"
            height="80px"
          />
          <img
            src="./public/Logos/bootstrap.jpeg"
            alt="bootstrap"
            width="80px"
            height="80px"
          />
          <img src="./public/Logos/React.png" alt="React" width="80px" height="80px" />
          <img
            src="./public/Logos/js.png"
            alt="javascript"
            width="80px"
            height="80px"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
