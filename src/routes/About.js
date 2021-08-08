import React from "react";
import "./About.css";

function About() {
  const title = document.querySelector("title");
  title.textContent = "Movie Box | About";
  return (
    <div className="about">
      <h1>Welcome to movie box!</h1>
      <span>
        "It is not our abilities that show what we truly are, it is our choices
        - Dumbledore, Harry Potter"
      </span>
      <div className="bg"></div>
    </div>
  );
}

export default About;
