import React from "react";
import Malar from "../images/Malar.jpg";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <section className="about-me">
        <article className="profile-picture">
          <img
            src={Malar}
            style={{ height: "300px", borderRadius: "10px", margin: "42px" }}
          />
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
          <h1 style={{ margin: "8px" }}>Skills</h1>
          {/* <ul className="skills">
                    <li><FaReact /></li>
                    <li><IoLogoJavascript /></li>
                    <li><IoLogoHtml5 /> </li>
                    <li><IoLogoCss3 /></li>
                    <li><FaBootstrap /></li>
                    <li>SCSS</li>
                    <li><img src={Nextjs} /></li>
                    <li><FaGitSquare /></li>
                    <li><img src={Net} /></li>
                    <li><img src={UmbracoLogo} /></li>
                    <li><img src={SQL} /></li>
                    <li><FaWordpress /></li>
                    <li><FaDrupal /></li>
                    <li><FaPhp /></li>
                    <li><img src={VisualStudio} /> </li>
                    <li><img src={Agile} /></li>
                </ul> */}
          <ul className="skills">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>SCSS</li>
            <li>Next</li>
            <li>Git</li>
            <li>.Net</li>
            <li>Umbraco</li>
            <li>SQL</li>
            <li>WordPress</li>
            <li>Drupal</li>
            <li>PHP</li>
            <li>VisualStudio</li>
            <li>Agile</li>
          </ul>
        </article>
      </section>
    </div>
  );
};
export default About;
