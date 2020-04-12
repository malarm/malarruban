import React from 'react';
import Malar from '../images/Malar.jpg';
import UmbracoLogo from '../images/umbraco-logo.jpg';
import VisualStudio from '../images/Visual-studio.jpg';
import Net from '../images/.net.jpg';
import Nextjs from '../images/nextjs.jpg';
import SQL from '../images/sql.jpg';
import Agile from '../images/Agile-logo.jpg'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaBootstrap, FaGitSquare, FaWordpress, FaPhp, FaDrupal } from 'react-icons/fa';


const About = () => {
    return (
        <section className="about-me">
            <article className="profile-picture">
                <img src={Malar} style={{ width: '400px', borderRadius: '10px' }} />
            </article>

            <article className="description">
                <h1 >About Me</h1>
                <p> Like you, I am unique in my own way. My uniqueness lies in the fact that I fight back and keep moving, no matter how hard I get hit.
                As a woman, mother to two young children and an expat from India to Denmark, my life has demanded a lot of flexibilities and sacrifices in my
                  career.</p>
                <br />
                <p>Time has come for me to do justice for my master in Computer Application and career thirst to be actively contributing to the
                digital world. While there is much I can and should learn in my forthcoming career,I can already assist you with web development and software development tasks.</p>
                <h1 style={{ margin: '8px' }}>Skills</h1>
                <ul className="skills">
                    <li><FaReact /></li>
                    <li><IoLogoJavascript /></li>
                    <li><IoLogoHtml5 /> </li>
                    <li><IoLogoCss3 /></li>
                    <li><FaBootstrap /></li>
                    <li>SCSS</li>
                    <li><img src={Nextjs} /></li>
                    <li><FaGitSquare /></li>
                    <li><img src={Net} /></li>
                    <li><img src={UmbracoLogo} /></li>
                    <li><img src={SQL} /></li>
                    <li><FaWordpress /></li>
                    <li><FaDrupal /></li>
                    <li><FaPhp /></li>
                    <li><img src={VisualStudio} /> </li>
                    <li><img src={Agile} /></li>
                </ul>

            </article>
        </section>
    )
}
export default About
