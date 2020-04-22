import React from "react";
import { Card, CardActions, Button } from "@material-ui/core";
import Content from "./Content";
import { FaArrowRight } from "react-icons/fa";

/* TAG LIST EXAMPLE
<ul
  style={{
    margin: "-0.25rem",
    display: "flex",
    "list-style-type": "none",
  }}
>
  {["JavaScript", "HTML", "CSS"].map((item) => (
    <li
      style={{
        "margin-right": "0.25rem",
        "margin-left": "0.25rem",
        "background-color": "var(--mainred)",
        color: "white",
        "padding-right": "0.5rem",
        "padding-left": "0.5rem",
        "padding-top": "0.25rem",
        "padding-botton": "0.25rem",
        "border-radius": "0.25rem",
      }}
    >
      {item}
    </li>
  ))}
</ul>;*/

function Projects() {
  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      <div className="projects">
        {Content.map(
          ({ imgSrc, title, href, description, project, usedTechnologies }) => (
            <Card className="container">
              <a href={href} target="_blank">
                <img src={imgSrc} />

                <label>{project}</label>
                <div className="text-block">
                  <h4>{title}</h4>
                </div>

                <div className="overlay">
                  <div className="project-desc">{description}</div>
                  <div className="used-tech">
                    <ul
                      style={{
                        margin: "-0.25rem",
                        display: "flex",
                        "list-style-type": "none",
                      }}
                    >
                      <li
                        style={{
                          "margin-right": "0.25rem",
                          "margin-left": "0.25rem",
                          "background-color": "var(--mainred)",
                          color: "white",
                          "padding-right": "0.5rem",
                          "padding-left": "0.5rem",
                          "padding-top": "0.25rem",
                          "padding-botton": "0.25rem",
                          "border-radius": "0.25rem",
                        }}
                      >
                        {usedTechnologies}
                      </li>
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
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
