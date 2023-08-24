import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import axios from "axios";

function Contact() {
  const form = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        emailjs
          .sendForm(
            response.data.serviceId,
            response.data.templateId,
            form.current,
            response.data.publicKey
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("Message Sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Fade top>
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
          <form className="row g-3" ref={form} onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">First name: </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                name="user_firsname"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last name: </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="user_lastname"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email: </label>
              <input
                type="email"
                className="form-control"
                id="inputPassword4"
                name="user_email"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Subject: </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="user_subject"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message: </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Write a message..."
                rows="3"
                name="message"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
