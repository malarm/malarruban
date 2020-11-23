import React from "react";
import Resort from "../images/resort.jpg";
import Movie from "../images/movie.jpg";
import DisplayApi from "../images/display-Api.jpg";
import Deo from "../images/deo.jpg";
import Undervisning from "../images/undervisning.jpg";
import Euforedrag from "../images/euforedrag.jpg";
import Notat from "../images/notat.jpg";
import Cphcasting from "../images/cphcasting.jpg";

const content = [
  {
    imgSrc: DisplayApi,
    title: "API Data",
    href: "https://github.com/malarm/React-With-API",
    description: "A website to rent out summer houses. ",
    usedTechnologies: ["React", "Html5", "CSS3", "API"],
    project: "Personal",
  },
  {
    imgSrc: Resort,
    title: "Malar Resort",
    href: "https://github.com/malarm/malarresort",
    description: " A website to  rent out hotels rooms.",
    usedTechnologies: ["React", "React Router"],
    project: "Personal",
  },
  {
    imgSrc: Movie,
    title: "IMDB Movies",
    href: "https://github.com/malarm/IMDB",
    description: "A website to find movies with IMDB ID’S.  ",
    project: "Personal",
    usedTechnologies: ["C#", "ASP.NET", "API", "Bootstrap"],
  },
  {
    imgSrc: Deo,
    title: "Deo",
    href: "https://www.deo.dk/",
    description: "Built this website and maintained on a daily basis",
    project: "Work",
    usedTechnologies: ["C#", "ASP.NET", "Umbraco", "SQL"],
  },
  {
    imgSrc: Undervisning,
    title: "Undervisning",
    href: "http://www.undervisning.deo.dk/",
    description: " A website to facilitate teaching about the EU. ",
    project: "Work",
    usedTechnologies: ["C#", "Umbraco", "SQL", "Javascript"],
  },
  {
    imgSrc: Euforedrag,
    title: "Euforedrag",
    href: "http://www.euforedrag.dk/",
    description: "A website to host data about speakers. ",
    project: "Work",
    usedTechnologies: ["C#", "ASP.NET.Core", "Umbraco"],
  },
  {
    imgSrc: Notat,
    title: "Notat",
    href: "http://notat.dk/",
    description: "A website to host data about magazines. ",
    project: "Work",
    usedTechnologies: ["C#", "ASP.NET.Core", "Umbraco"],
  },
  {
    imgSrc: Cphcasting,
    title: "Cphcasting",
    href: "https://www.cphcasting.dk/",
    description: "A website to search for models, actors and many more. ",
    project: "Work",
    usedTechnologies: ["PHP", "Drupal, Wordpress "],
  },
];
export default content;
