import React from "react";
import photoMe from "../../assets/images/Me.jpeg";
import "bootstrap";

function About() {
  return (
    <section class="container about">
          <div class="row">
          <h1 id="about">About Me</h1>
        <div class="col">
          
          <img src={photoMe} alt="" id="photoMe"></img>
        </div>
        <div class="col">
          <p>
            I am a professional in the field of software engineering. I chose
            this field because it is challenging and offers a potential for
            exponential growth of knowledge and skill. I enjoy and take pride in
            overcoming challenges. I get along well with others. I enjoy working
            in a team or solo. My career goals are to work with, learn and grow
            in a single company long term.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
