import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Resume from '../images/Resume.pdf'

export default function NavBar() {

    return (
        <nav className="navbar">
            <div className="nav-header">

                <h1 className="logo">MR</h1>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li>
                        <a target="_blank" href={Resume} download="Malar's-Resume" >Download My Resume</a>
                    </li>
                    <li>
                        <a href="https://github.com/malarm?tab=repositories" style={{ fontSize: '1.7rem' }} target="_blank"> <IoLogoGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/malar-ruban-a02669b5/" style={{ fontSize: '1.7rem' }} target="_blank"> <IoLogoLinkedin /></a>
                    </li>


                </ul>
            </div>
        </nav>
    )

}
