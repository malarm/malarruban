import React from 'react';
import { Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

const PersonalProjects = () => {
    return (
        <div id="personalprojects" style={{ background: '#f7f7f7', marginBottom: '27px', paddingBottom: '30px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>My Projects</h1>
            <div className="Personal-projects" >
                <Card shadow={5} className="projects1" >
                    <CardTitle style={{ color: '#616161' }}>Search and Display data from API</CardTitle>

                </Card>
                <Card shadow={5} className="projects2" >
                    <CardTitle style={{ color: '#616161' }} >Malar Resort</CardTitle>

                </Card>
                <Card shadow={5} className="projects3" >
                    <CardTitle style={{ color: '#616161' }}>Search Movies from IMDB</CardTitle>

                </Card>
            </div>
        </div>
    )
}
export default PersonalProjects