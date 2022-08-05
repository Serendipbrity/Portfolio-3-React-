import React from "react";

function Nav() {
  // const categories = [
  //     {
  //         name: ''
  //     }
  // ]
  return (
    <header>
      <nav>
        <ul class='flex-row' id='name'>Brittani Court
          {/* <li class='navLink'>
            <a href="#about">About Me</a>
          </li> */}
          <li class='navLink'>
            <a href="#projectHeader">Portfolio </a>
          </li>
          <li class='navLink'>
            <a href="#contact">Contact </a>
          </li>
          <li class='navLink'>
            <a href="https://docs.google.com/document/d/1mnrcTgO3zlY4ljqUmMeDe4T4X4y_y9suxLQ-7sMkS80/edit?usp=sharing">Resume Link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
