import React from 'react';
import malar from '../images/Malar.jpg';

const About = () => {
    return (
        <section className="about-me" id="about">
            <article className="profile-picture">
                <img src={malar} style={{ width: '400px', borderRadius: '10px' }} />
            </article>

            <article className="description">
                <h1 >About Me</h1>
                <p> Like you, I am unique in my own way. My uniqueness lies in the fact that I fight back and keep moving, no matter how hard I get hit.
                As a woman, mother to two young children and expat from India to Denmark, my life has demanded a lot of flexibilities and sacrifices in my
                  career.</p>
                <p>Time has come for me to do justice for my master in Computer Application and career thirst to be actively contributing to the
                digital world. While there is much I can and should learn in my forthcoming career,I can already assist you with web development and software development tasks.</p>
                <h1 style={{ margin: '8px' }}>Skills</h1>
                <ul className="skills">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML5/CSS3 </li>
                    <li>Bootstrap</li>
                    <li>SCSS</li>
                    <li>Next</li>
                    <li>Git</li>
                    <li>.Net</li>
                    <li>Umbraco</li>
                    <li>SQL/Mysql</li>
                    <li>Wordpress</li>
                    <li>Drupal</li>
                    <li>PHP</li>
                    <li>Visual studio </li>
                    <li>Agile</li>
                </ul>

            </article>
        </section>
    )
}
export default About