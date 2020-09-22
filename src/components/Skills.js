import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import skillsJSON from '../skills.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/skills.scss";

export default function Skills() {
    return(
        <section id="skills" className="nav-fix">
        <Jumbotron fluid>
            <div class="wrapper">
                <h2>Umiejętności</h2>
                <div className="underline" />
                <Container fluid>
                    <Row>
                {
                    skillsJSON.map(el =>{
                        return (
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <img className="skills-icon" src={process.env.PUBLIC_URL + "/assets/" + el.name + ".png"} alt={el.name + " icon"} />
                                <p>{el.description}</p>
                            </Col>
                     )})
                }
                    </Row>
                </Container>
            </div>
        </Jumbotron>
    </section>
    )
}