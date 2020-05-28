import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Resume from "../images/Resume.pdf";
export default function NavBar() {
  return (
    <>
      <header>
        <div className="logo content-desktop">Malar Ruban</div>
        <div className="logo content-mobile">MR</div>
        <nav>
          <ul className="nav-links">
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
          </ul>
        </nav>
        <a
          className="content-desktop"
          style={{ paddingLeft: "25px" }}
          target="_blank"
          href={Resume}
          download="Malar's-Resume"
        >
          <button> Download my resume</button>
        </a>
        <a
          className="content-mobile"
          style={{ paddingLeft: "13px", marginRight: "9px" }}
          target="_blank"
          href={Resume}
          download="Malar's-Resume"
        >
          <button> Resume</button>
        </a>
      </header>
    </>
  );
}
