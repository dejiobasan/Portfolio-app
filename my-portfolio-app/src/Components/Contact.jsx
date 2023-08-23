import React from "react";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="portfolio-content">
          <h1 className="header3">Contact Me</h1>
          <p>
            I am open to freelance opportunities, startups, and large-scale
            projects. However, if you have any other requests or questions,
            kindly fill the form below and I will be happy to respond.
          </p>
        </div>
      </div>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">
              First name:
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Last name:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label className="form-label">
              Subject:
            </label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
