import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import photo from "../../assets/downloads/Resume.pdf";

function ContactForm() {
  // empty values to clear the input fields on the component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  // sync form with input
  // prevent default action of the form submit button then log formState object on the submit click
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };
  // validate email
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact" class="container">
      <div class="row">
        <div class="col ">
          <h1 id="contactMe">Contact Me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                onBlur={handleChange}
                defaultValue={name}
                name="name"
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
              ></textarea>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="col resume">
          <a href={photo} class="resume">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
