import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Hero hero="bannerhero">
        <Banner>
          <h1>
            Hello , I am <span style={{ color: "#ff2058" }}>Malar</span> welcome
            to my world
          </h1>
          <h4 style={{ color: "#343a40" }}>Front-end developer</h4>
        </Banner>
      </Hero>
      <About />
      <Projects />
    </>
  );
};
export default Home;
