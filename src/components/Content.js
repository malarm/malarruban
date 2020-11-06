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
    imgSrc: Deo,
    title: "Deo",
    href: "https://www.deo.dk/",
    description: "Built this website and maintained on a daily basis",
    project: "Work",
    usedTechnologies: ["C#", "ASP.NET", "Umbraco", "SQL"],
  },
 ];
export default content;
