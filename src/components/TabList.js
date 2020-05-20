import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "./tabs.css";

const Skills = () => {
  return (
    <Tabs>
      <TabList className="data-reach-tab">
        <Tab>Main Skills</Tab>
        <Tab>Experience</Tab>
        <Tab>Education</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>
            <span> Front-end development.</span> My work passion is in the
            front-end, where I’m experienced in HTML5, CSS3 and Javascript,
            incl.frameworks like React.js and Next.js.
          </p>
          <p>
            <span>Full-stack perspective.</span> I also have the experience of
            working with backend, databases, 3rd party integrations and
            infrastructure.
          </p>
          <p>
            <span> CMS.</span> I have spent years working in Umbraco, Drupal and
            Wordpress setups and I know my way around.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <span>Front-end developer - Intern</span> - Appliedtechnologies 2019
            - 2020
          </p>
          <p>
            <span>Web developer</span> - DEO 2017 - 2018
          </p>
          <p>
            <span>Web developer</span> - Xenos IT 2014
          </p>
          <p>
            <b>Developer</b> - Usoftware Systems 2012 - 2014
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <span>Master in Computer Application, MSc</span> - Bharathidasan
            University 2007 - 2010
          </p>
          <p>
            <span>Bachelor in Chemistry, BSc</span> - Bharathidasan University
            2004 - 2007
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Skills;
