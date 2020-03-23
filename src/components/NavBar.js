import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class NavBar extends Component {

    state = {
        isOpen: false
    }
    handleToggel = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="logo">
                            {/*<img src={logo} alt="Malar Resort" />*/}
                            MR
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggel}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <AnchorLink href='#home'>Home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#about'>About Me</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#personalprojects'>Personal Projects</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#projectsatwork'>Projects At Work</AnchorLink>
                        </li>
                        <li>
                            <a href="https://github.com/malarm/malarruban/blob/master/Resume.pdf" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
