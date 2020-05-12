import React from "react";
import Malar from "../images/Malar.jpg";
import Skills from "./TabList";
import Resume from "../images/Resume.pdf";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
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
            Like you, I am unique in my own way. My uniqueness lies in the fact
            that I fight back and keep moving, no matter how hard I get hit. As
            a woman, mother to two young children and an expat from India to
            Denmark, my life has demanded a lot of flexibilities and sacrifices
            in my career.
          </p>
          <br />
          <p>
            Time has come for me to do justice for my master in Computer
            Application and career thirst to be actively contributing to the
            digital world. While there is much I can and should learn in my
            forthcoming career,I can already assist you with web development and
            software development tasks.
          </p>
          <Skills />
        </article>
      </section>
    </div>
  );
};
export default About;
