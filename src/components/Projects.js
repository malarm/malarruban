import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';
import Resort from '../images/resort.jpg';
import Movie from '../images/movie.jpg';
import DisplayApi from '../images/display-Api.jpg';
import Deo from '../images/deo.jpg';
import Undervisning from '../images/undervisning.jpg';
import Euforedrag from '../images/euforedrag.jpg';
import Notat from '../images/notat.jpg';
import Cphcasting from '../images/cphcasting.jpg';

// TODO: Making the cards an iterable item:
// 1. Separate the content into a JSON object:
// const content = [{
//      imgSrc: DisplayApi,
//      title: 'Search and Display data from API',
//      href: "https://github.com/malarm/React-With-API"
// },
// ...]
// 
// 2. Create an iteration function for the content Array:
// {content.map(({ imgSrc, title, href }) => (
//    // add card component here
// )}
// 
// 3. Rewrite the card component to use variables from the map function
//    <Card className="container">
//        <img src={imgSrc} />
//        <div className="text-block">
//            <h4>{title}</h4>
//            <button> <a href={href} target="_blank">VIEW DETAILS</a></button>
//        </div>
//    </Card>
//
// 4. That's it! Later on this will allow us to use a CMS for the content or separate 
// content into it's own file and keep the code clean.

const Projects = () => {
    return (
        <div className="project-container">
            <h1 className="project-title">Projects</h1>
            <div className="projects" >

                <Card className="container">
                    <img src={DisplayApi} />
                    <div className="text-block">
                        <h4>Search and Display data from API</h4>
                        <button> <a href="https://github.com/malarm/React-With-API" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>

                <Card className="container" >
                    <img src={Resort} />
                    <div className="text-block">
                        <h4 >Malar Resort </h4>
                        <button> <a href="https://github.com/malarm/malarresort" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container">
                    <img src={Movie} />
                    <div className="text-block">
                        <h4>Search Movies from IMDB </h4>
                        <button> <a href="https://github.com/malarm/IMDB" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container">
                    <img src={Deo} />
                    <div className="text-block">
                        <h4>DEO </h4>
                        <button> <a href="https://www.deo.dk/" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container">
                    <img src={Undervisning} />
                    <div className="text-block">
                        <h4 >Undervisning </h4>
                        <button> <a href="http://www.undervisning.deo.dk/" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container">
                    <img src={Euforedrag} />
                    <div className="text-block">
                        <h4 >Euforedrag </h4>
                        <button> <a href="http://www.euforedrag.dk/" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container" >
                    <img src={Notat} />
                    <div className="text-block">
                        <h4 >Notat </h4>
                        <button> <a href="http://notat.dk/" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>
                <Card className="container" >
                    <img src={Cphcasting} />
                    <div className="text-block">
                        <h4>Cphcasting </h4>
                        <button> <a href="https://www.cphcasting.dk/" target="_blank">VIEW DETAILS</a></button>
                    </div>
                </Card>

            </div>
        </div>
    )
}
export default Projects
