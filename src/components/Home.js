import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <Hero hero="bannerhero">
        <Banner>
          <h1 style={{ color: "#ffffff", marginTop: "60px" }}>
            Hello, I am <span style={{ color: "#ff2058" }}>Malar</span> welcome
            to my world
          </h1>
          <h4 style={{ color: "#ffffff" }}>Front-end developer</h4>
        </Banner>
      </Hero>
      <About />
      <Projects />
      <Footer />
    </>
  );
};
export default Home;
