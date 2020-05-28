import React from "react";
import Content from "./Content";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
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
              <a href={href} target="_blank">
                <img src={imgSrc} />
                <div className="text-block">
                  <label>{project}</label>
                  <h2>{title}</h2>
                  <div className="overlay">
                    <div className="project-desc">
                      <div>{description}</div>
                      <div style={{ marginTop: "20px" }}>
                        <ul>
                          {usedTechnologies.map((technologies) => (
                            <li>{technologies}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
