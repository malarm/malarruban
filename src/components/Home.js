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
          <h2 style={{ marginTop: "7.5em", fontSize: "2.3em" }}>
            Hi, I'm Malar <br />
            I'm front-end developer.
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
