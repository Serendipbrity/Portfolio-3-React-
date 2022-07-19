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
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projectHeader">Portfolio </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
          <li>
            <a href="#resume">Resume </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
