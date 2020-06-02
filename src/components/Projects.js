import React, { useState } from "react";
import Content from "./Content";

function Projects() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="project-container">
      <h1>Projects </h1>
      <p>
        Professionally and personally I push myself to learn,
        <br /> and continously get better at what I love - building things.
      </p>
      <div className="projects">
        {Content.map(
          ({ imgSrc, title, href, description, project, usedTechnologies }) => (
            <div className="container">
              <a
                href={href}
                target="_blank"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <img src={imgSrc} />
                <div className="text-block">
                  <label>{project}</label>
                  <h2>{title}</h2>
                  {isShown && (
                    <div className="overlay">
                      <div>{description}</div>
                      <div>
                        <ul>
                          {usedTechnologies.map((technologies) => (
                            <li>{technologies}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
