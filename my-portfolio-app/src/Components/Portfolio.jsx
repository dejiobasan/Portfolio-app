import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Portfolio() {
  return (
    <div>
      <Fade top>
        <div className="container">
          <div className="portfolio-content">
            <h1 className="header3">Portfolio</h1>
            <p>
              All my projects are open source, which i would be placing the
              github repository link down below.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Google keep app clone</h5>
                  <p className="card-text">
                    A clone of Google keep app built usin Reactjs, Html, Css,
                    and JavaScript.
                  </p>
                  <Link
                    to="https://github.com/dejiobasan/my-first-react-app"
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Exercise Tracker</h5>
                  <p className="card-text">
                    A React and Nodejs application used to Track user Exercises.
                    Implemented with MongoDB
                  </p>
                  <Link
                    to="https://github.com/dejiobasan/Exercise-Tracker"
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Shrink-It</h5>
                  <p className="card-text">
                    A React and Python application that shortens input URL'S.
                    Implemented with Firebase.
                  </p>
                  <Link
                    to="https://github.com/dejiobasan/Shrink-It"
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Exam Eligibility System</h5>
                  <p className="card-text">
                    A Nodejs web-app that authenticates students before writing
                    an examination.
                  </p>
                  <Link
                    to="https://github.com/dejiobasan/ExamEligibilitySystem"
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Portfolio;
