import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <h1>I dont'n drink coffee, but I love tea. let's talk.</h1>
      <h3>Malar Ruban</h3>
      <h3>malam09@gmail.com</h3>
      <h3>+45 91 73 20 19</h3>
      <h3>
        <a href="https://github.com/malarm?tab=repositories" target="_blank">
          <IoLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/malar-ruban-a02669b5/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
      </h3>
    </div>
  );
}

export default Footer;
