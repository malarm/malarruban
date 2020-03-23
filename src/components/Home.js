import React from 'react';
import Banner from './Banner';
import ProjectsAtWork from './Projects-At-Work';
import About from './About';
import PersonalProjects from './Personal-Projects';
import Personal from './PersonalProjects'

const Home = () => {
    return (
        <>
            <div id="home">
                <Banner title="Don't ever let somebody tell you... You can't do something. Not even me. All right? ">
                    <h1>Hello , I am <span style={{ color: 'lightblue' }}>Malar ruban</span> welcome to my world</h1>
                    <p>Front-end developer</p>
                </Banner>
            </div>
            <About />

            <Personal />
            <ProjectsAtWork />
        </>
    )

}
export default Home
