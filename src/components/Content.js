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
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
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
      " I developed a website for a resort. The search function is the main function of the website. Hotel rooms can be selected based on room type ,number of guests and the price of the rooms. Web API is an important technical feature.",

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
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Personal",
    usedTechnologies:
      "C#, ASP.NET.Core, API, Entity framework, MS SQL, Bootstrap",
  },
  {
    imgSrc: Deo,
    title: "Deo",
    href: "https://www.deo.dk/",
    description:
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, Entity framework, SQL, Html5, CSS3, Javascript",
  },
  {
    imgSrc: Undervisning,
    title: "Undervisning",
    href: "http://www.undervisning.deo.dk/",
    description:
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3, Javascript",
  },
  {
    imgSrc: Euforedrag,
    title: "Euforedrag",
    href: "http://www.euforedrag.dk/",
    description:
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3",
  },
  {
    imgSrc: Notat,
    title: "Notat",
    href: "http://notat.dk/",
    description:
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Work",
    usedTechnologies:
      "C#, ASP.NET MVC, Umbraco, Visual studio, SQL, Html5, CSS3",
  },
  {
    imgSrc: Cphcasting,
    title: "Cphcasting",
    href: "https://www.cphcasting.dk/",
    description:
      "This website is made for a company which rents out summer houses to its clients. There are two main features in this website. ",
    project: "Work",
    usedTechnologies: "PHP, Drupal, Wordpress , HTML, CSS, Javascript",
  },
];
export default content;
