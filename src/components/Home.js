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
          <h2>
            Hi, I'm Malar <br />
            I'm a front-end developer.
          </h2>
        </Banner>
      </Hero>
      <About />
      <Projects />
      <Footer />
    </>
  );
};
export default Home;
