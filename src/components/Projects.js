import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/projects.scss';
import { Row } from 'react-bootstrap';

export default function Projects(){
    const cardBodyStyle={
        background : "linear-gradient(0deg, rgba(213,213,213,1) 0%, rgba(255,255,255,1) 100%)"
    }
    return(
        <section id="projects" className="nav-fix">
        <Jumbotron fluid>
            <div class="wrapper" style={{width: "95%", maxWidth: "900px"}}>
                <h2>Projekty</h2>
                <div className="underline" />

                <div className="d-flex flex-column d-lg-none">
                    <Row>

                    </Row>
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/project1m.jpg"} />
                            <Card.Body style={cardBodyStyle}>
                                <Card.Title>Portfolio</Card.Title>
                                <Card.Text>
                                Strona którą obecnie widzisz
                                </Card.Text>
                                <div className="m-auto">
                                    <Button className="mr-1" variant="danger" disabled="true">Live</Button>
                                    <a href="https://github.com/dawidilba/portfolio" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-github"></i></Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/project2m.jpg"} />
                            <Card.Body style={cardBodyStyle}>
                                <Card.Title>Pizza Creator</Card.Title>
                                <Card.Text>
                                Strona stworzona w React
                                </Card.Text>
                                <div className="m-auto">
                                    <a href="https://dawidilba.github.io/pizza-creator" target="_blank" rel="noopener noreferrer"><Button className="mr-1" variant="danger">Live</Button></a>
                                    <a href="https://github.com/dawidilba/pizza-creator/tree/master" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-github"></i></Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/project3m.jpg"} />
                            <Card.Body style={cardBodyStyle}>
                                <Card.Title>Rozpoznawianie gestów</Card.Title>
                                <Card.Text>
                                Projekt stworzony wraz z kolegą z zespołu. Część odbierająca i rozpoznająca dane stworzona w Pythonie została napisana w całości przeze mnie.
                                </Card.Text>
                                <div className="m-auto">
                                <a href="https://github.com/dawidilba/ProjektSystemyMikroprocesorowe" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                                <a href="https://www.youtube.com/watch?v=KuE8tHS_LOY" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-youtube"></i></Button></a>
                            </div>
                            </Card.Body>
                        </Card>
                </div>
                <Carousel className="d-none d-lg-block">
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project1.jpg"} alt="React Bootstrap project" />
                        <Carousel.Caption className="hero-project">
                            <h3>Portfolio</h3>
                            <p>Strona którą obecnie widzisz</p>
                            <div className="w-25 ml-auto mt-n4">
                                <Button className="mr-1" variant="danger" disabled="true">Live</Button>
                                <a href="https://github.com/dawidilba/portfolio" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-github"></i></Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project2.jpg"} alt="React project" />
                        <Carousel.Caption className="hero-project">
                            <h3>Pizza Creator</h3>
                            <p>Strona stworzona w React</p>
                            <div className="w-25 ml-auto mt-n4">
                                <a href="https://dawidilba.github.io/pizza-creator" target="_blank" rel="noopener noreferrer"><Button className="mr-1" variant="danger">Live</Button></a>
                                <a href="https://github.com/dawidilba/pizza-creator/tree/master" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-github"></i></Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project3.jpg"} alt="Python project" />
                        <Carousel.Caption className="hero-project">
                            <h3>Rozpoznawianie gestów</h3>
                            <p>Projekt stworzony wraz z kolegą z zespołu. Część odbierająca i rozpoznająca dane stworzona w Pythonie została napisana w całości przeze mnie.</p>
                            <div className="w-25 ml-auto mt-n4">
                                <a href="https://github.com/dawidilba/ProjektSystemyMikroprocesorowe" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                                <a href="https://www.youtube.com/watch?v=KuE8tHS_LOY" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-youtube"></i></Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </Jumbotron>
    </section>
    )
}