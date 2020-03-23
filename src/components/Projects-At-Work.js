import React from 'react';

const ProjectsAtWork = () => {
    return (
        <div style={{ background: '#f7f7f7', marginBottom: '27px', paddingBottom: '35px' }} id="projectsatwork">
            <h1 className="project-title">Projects At work</h1>
            <div className="project-at-work">
                <p>Here are some of the projects that I have been part of at my work.</p>
                <ul>
                    <li><a href="https://www.deo.dk/" target="_blank" >Deo</a></li>
                    <li><a href="http://www.undervisning.deo.dk/" target="_blank">Undervisning</a></li>
                    <li><a href="http://www.euforedrag.dk/" target="_blank">Euforedrag</a></li>
                    <li><a href="www.notat.dk" target="_blank">Notat</a></li>
                    <li><a href="https://www.cphcasting.dk/" target="_blank">Cphcasting</a></li>
                </ul>
            </div>
        </div>
    )
}
export default ProjectsAtWork
