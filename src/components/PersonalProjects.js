import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

const PersonalProjects = () => {
    return (
        <div id="personalprojects" style={{ background: '#f7f7f7', marginBottom: '27px', paddingBottom: '30px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>My Projects</h1>
            <div className="Personal-projects" >
                <Card shadow={5} className="container">
                    <CardTitle>Search and Display data from API</CardTitle>
                    <CardText>
                        <p> This website is made for a company which rents out summer houses to its clients. There are two main features in this website.</p>
                    </CardText>
                    <CardActions>
                        <button type="submit"><a href="https://github.com/malarm/React-With-API" target="_blank" className="github-link">GitHub</a></button>
                    </CardActions>

                </Card>
                <Card shadow={5} className="container" >
                    <CardTitle >Malar Resort</CardTitle>
                    <CardText>
                        <p> This website is made for a company which rents out summer houses to its clients. There are two main features in this website.</p>
                    </CardText>
                    <CardActions>
                        <button type="submit"><a href="https://github.com/malarm/malarresort" target="_blank" className="github-link">GitHub</a></button>

                    </CardActions>
                </Card>
                <Card className="container" >
                    <CardTitle >Search Movies from IMDB</CardTitle>
                    <CardText>
                        <p> This website is made for a company which rents out summer houses to its clients. There are two main features in this website.</p>
                    </CardText>
                    <CardActions>
                        <button type="submit"><a href="https://github.com/malarm/IMDB" target="_blank" className="github-link">GitHub</a></button>

                    </CardActions>
                </Card>
            </div>
        </div>
    )
}
export default PersonalProjects