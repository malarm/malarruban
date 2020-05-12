import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "./tabs.css";

const Skills = () => {
  return (
    <Tabs>
      <TabList className="data-reach-tab">
        <Tab>Main Skills</Tab>
        <Tab>Experenience</Tab>
        <Tab>Education</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>
            <b> Front-end development.</b> My work passion is in the front-end,
            where I’m experienced in HTML5, CSS3 and Javascript, incl.frameworks
            like React.js and Next.js.
          </p>
          <br />
          <p>
            <b>Full-stack perspective.</b> I also have experience working with
            backend, databases, 3rd party integrations and infrastructure.
          </p>
          <br />
          <p>
            <b> CMS.</b> I spent years working in Umbraco , Drupal and Wordpress
            setups and know my way around.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Front-end developer - Intern</b> - Appliedtechnologies
            <br />
            2019 - 2020
          </p>
          <br />
          <p>
            <b>Web developer</b> - DEO
            <br />
            2017 - 2018
          </p>
          <br />
          <p>
            <b>Web developer</b> - Xenos IT
            <br />
            2014
          </p>
          <br />
          <p>
            <b>Developer</b> - Usoftware Systems
            <br />
            2012 - 2014
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Master in computer application, MSc</b> - Bharathidasan
            University
            <br />
            2007 - 2010
          </p>
          <br />
          <p>
            <b>Bachelor in Chemistry, BSc</b> - Bharathidasan University
            <br />
            2004 - 2007
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Skills;
