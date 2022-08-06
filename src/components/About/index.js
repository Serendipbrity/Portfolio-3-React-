import React from "react";
import photoMe from "../../assets/images/Me.jpeg";
import "bootstrap";

function About() {
  return (
    <section className="container about">
      <div className="row">
        <div className="nameAndPic col">
          <h1 id="about">Brittani Court</h1>
        <div >
          <img src={photoMe} alt="" id="photoMe"></img>
          </div>
          </div>
        <div className="col" id="aboutMe">
            I am a professional in the field of software engineering. I chose
            this field because it is challenging and offers a potential for
            exponential growth of knowledge and skill. I enjoy and take pride in
            overcoming challenges. I get along well with others. I enjoy working
            in a team or solo. My career goals are to work with, learn and grow
            in a single company long term.
        </div>
      </div>
    </section>
  );
}

export default About;
