import React from "react";
import Resort from "../images/resort.jpg";
import Movie from "../images/movie.jpg";
import DisplayApi from "../images/display-Api.jpg";
import Deo from "../images/deo.jpg";
import Undervisning from "../images/undervisning.jpg";
import Euforedrag from "../images/euforedrag.jpg";
import Notat from "../images/notat.jpg";
import Cphcasting from "../images/cphcasting.jpg";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  FaReact,
  FaBootstrap,
  FaGitSquare,
  FaWordpress,
  FaPhp,
  FaDrupal,
} from "react-icons/fa";

const content = [
  {
    imgSrc: DisplayApi,
    title: "API Data",
    href: "https://github.com/malarm/React-With-API",
    description:
      "A website to a company that rents out summer houses Two main features : The first feature is to demonstrate property details. The second feature is to show the trarrif range in the filter. ",
    project: "Personal",
    usedTechnologies: (
      <>
        <FaReact />, <IoLogoHtml5 /> , <IoLogoCss3 /> And API
      </>
    ),
  },
  {
    imgSrc: Resort,
    title: "Malar Resort",
    href: "https://github.com/malarm/malarresort",
    description:
      " Developed this website for a resort having the search function as the vital function. Web API is an important feature.",

    project: "Personal",
    usedTechnologies: (
      <>
        <FaReact />
        , React Router, React Icons, <IoLogoHtml5 /> , <IoLogoCss3 /> And
        contentful API
      </>
    ),
  },
  {
    imgSrc: Movie,
    title: "IMDB Movies",
    href: "https://github.com/malarm/IMDB",
    description:
      "Developed this website to  learn to use web API. The website has a search function where we can insert one or many IMDB IDs.  ",
    project: "Personal",
    usedTechnologies:
      "C#, ASP.NET.Core, API, Entity framework, MS SQL, Bootstrap",
  },
  {
    imgSrc: Deo,
    title: "Deo",
    href: "https://www.deo.dk/",
    description:
      "Built this website and maintained on a daily basis and making the registration page for participants was an integral part of work. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, Entity framework, SQL, Html5, CSS3, Javascript",
  },
  {
    imgSrc: Undervisning,
    title: "Undervisning",
    href: "http://www.undervisning.deo.dk/",
    description:
      "I worked on this project from the beginning to end singlehandedly.  ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3, Javascript",
  },
  {
    imgSrc: Euforedrag,
    title: "Euforedrag",
    href: "http://www.euforedrag.dk/",
    description: "I took care of the maintenance work. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3",
  },
  {
    imgSrc: Notat,
    title: "Notat",
    href: "http://notat.dk/",
    description: "I developed  and maintained  this project . ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3",
  },
  {
    imgSrc: Cphcasting,
    title: "Cphcasting",
    href: "https://www.cphcasting.dk/",
    description:
      "I was part of a team of two people who developed and maintained this big project. I developed several modules and contributed significantly to build search function which is an important feature.  ",
    project: "Work",
    usedTechnologies: "PHP, Drupal, Wordpress , HTML, CSS, Javascript",
  },
];
export default content;
