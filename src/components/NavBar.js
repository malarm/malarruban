import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Resume from "../images/Resume.pdf";
export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo content-desktop">Malar Ruban</li>
        <h1 className="logo content-mobile">MR</h1>
        <div className="navbar-right">
          <li>
            <a
              href="https://github.com/malarm?tab=repositories"
              target="_blank"
            >
              <IoLogoGithub />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/malar-ruban-a02669b5/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
          </li>
          <li className="content-desktop">
            <a
              target="_blank"
              href={Resume}
              download="Malar's-Resume"
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "14px",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Download my resume
            </a>
          </li>
          <li className="content-mobile">
            <a
              target="_blank"
              href={Resume}
              download="Malar's-Resume"
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "7px",
                fontSize: "1rem",
              }}
            >
              Resume
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}
