import React, {useState} from "react";

function ContactForm() {
    // empty values to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // sync form with input
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    };
    // prevent default action of the form submit button then log formState object in the submit button click
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
  return (
    <section>
      <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name:</label>
              <input type='text' onChange={handleChange} defaultValue={name} name='name'></input>
          </div>
          <div>
              <label htmlFor='email'>Email address:</label>
              <input type='email' name='email' defaultValue={email} onChange={handleChange}></input>
          </div>
          <div>
              <label htmlFor='message'>Message:</label>
              <textarea name='message' defaultValue={message} onChange={handleChange}></textarea>
          </div>
              <button type='submit'>Submit</button>
              </form>
    </section>
  );
}

export default ContactForm;
