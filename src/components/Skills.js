import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import skillsJSON from '../skills.json';
import Row from 'react-bootstrap/Row';

export default function Skills() {
    return(
        <section id="skills" className="nav-fix">
        <Jumbotron fluid>
            <div class="wrapper">
                <h2>Umiejętności</h2>
                <Container>
                    <Row>
                {
                    skillsJSON.map(el =>{
                        return (
                            <div>
                                <img src={process.env.PUBLIC_URL + "/assets/" + el.name + ".png"} alt={el.name + " icon"} style={{width: "75px"}} />
                                <p>{el.description}</p>
                            </div>
                     )})
                }
                    </Row>
                </Container>
            </div>
        </Jumbotron>
    </section>
    )
}