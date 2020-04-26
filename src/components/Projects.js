import React from "react";
import Content from "./Content";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      <div className="projects">
        {Content.map(
          ({ imgSrc, title, href, description, project, usedTechnologies }) => (
            <div className="container">
              <a href={href} target="_blank">
                <img src={imgSrc} />
                <label>{project}</label>
                <div className="text-block">
                  <h4>{title}</h4>
                </div>
                <div className="overlay">
                  <div className="project-desc">{description}</div>
                  <div className="used-tech">
                    <ul>
                      {usedTechnologies.map((technologies) => (
                        <li>{technologies}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="viewproject-button">
                    <div>View Project</div>
                    <div style={{ padding: "3px" }}>
                      <FaArrowRight />
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
