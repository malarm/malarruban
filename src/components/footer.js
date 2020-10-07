import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <h1>I don't drink coffee, but I love tea. Let's talk.</h1>
      <p>Malar Ruban</p>
      <p>malarm09@gmail.com</p>
      <p>+45 91 73 20 19</p>
      <p style={{ padding: "5px" }}>
        <a href="https://github.com/malarm?tab=repositories" target="_blank">
          <IoLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/malar-ruban-a02669b5/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
      </p>
    </div>
  );
}

export default Footer;
