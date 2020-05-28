import React from "react";
import Malar from "../images/Malar.jpg";
import Skills from "./TabList";
import Resume from "../images/Resume.pdf";

const About = () => {
  return (
    <>
      <section className="about-me">
        <article className="profile-picture">
          <img src={Malar} />
          <button className="fullresume">
            <a target="_blank" href={Resume} download="Malar's-Resume">
              Download full resume
            </a>
          </button>
        </article>
        <article className="description">
          <h1>About Me</h1>
          <p>
            I have an MSc in Computer Applications and wide practical experience
            across several modern technologies.
          </p>
          <p>
            I have an eye for details, I’m an executor by heart, and people know
            me for my commitment, positive attitude and teamwork.
          </p>
          <Skills />
        </article>
      </section>
    </>
  );
};
export default About;
