import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';
import { GitHub } from 'react-feather';
import { MoreHorizontal, Layers } from 'react-feather';


const PersonalProjects = () => {
    return (
        <div id="personalprojects" style={{ background: '#f7f7f7', marginBottom: '27px', paddingBottom: '30px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>My Projects</h1>
            <div className="Personal-projects" >
                <a href="https://github.com/malarm/React-With-API" className="github-link" target="_blank">
                    <Card shadow={5} className="container">
                        <Layers size='50' style={{ color: '#9818D6' }} />
                        <CardTitle>Search and Display data from API</CardTitle>
                        <CardText>
                            <p> This website is made for a company which rents out summer houses to its clients.
                            There are two main features in this website
                        </p>
                            <span ><MoreHorizontal size='50' style={{ marginLeft: '95px', marginTop: '-33px' }} /></span>


                        </CardText>
                        <CardActions>
                            <GitHub size='50' />
                        </CardActions>

                    </Card>
                </a>
                <a href="https://github.com/malarm/malarresort" className="github-link" target="_blank">
                    <Card shadow={5} className="container" >
                        <Layers size='50' style={{ color: '#9818D6' }} />
                        <CardTitle >Malar Resort</CardTitle>
                        <CardText>
                            <p> I have developed a website for a resort.
                            The search function is the main function of the website.
                            Hotel rooms can be selected based on room type, number of guests
                            </p>
                            <span ><MoreHorizontal size='50' className="resort-more" /></span>
                        </CardText>
                        <CardActions>
                            <GitHub size='50' />

                        </CardActions>

                    </Card>
                </a>
                <a href="https://github.com/malarm/IMDB" target="_blank" className="github-link"  >
                    <Card className="container" >
                        <Layers size='50' style={{ color: '#9818D6' }} />
                        <CardTitle >Search Movies from IMDB</CardTitle>
                        <CardText>
                            <p> I have developed a website to learn to use web API. It was to challenge myself as I never worked with web API before</p>
                            <span ><MoreHorizontal size='50' className="imdb-more" /></span>
                        </CardText>
                        <CardActions>
                            <GitHub size='50' />

                        </CardActions>
                    </Card>
                </a>

            </div>
        </div>
    )
}
export default PersonalProjects
