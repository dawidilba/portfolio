import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IconsFont from './IconsFont';
import '../styles/projects.scss';

export default function Projects(){
    const cardBodyStyle={
        background : "linear-gradient(0deg, rgba(213,213,213,1) 0%, rgba(255,255,255,1) 100%)"
    }
    return(
        <section id="projects">
        <Jumbotron fluid>
            <div class="wrapper" style={{width: "95%", maxWidth: "900px"}}>
                <h2>Projekty</h2>
                <div className="underline" />
                <div className="d-flex flex-column d-lg-none">
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/project1m.jpg"} />
                        <Card.Body style={cardBodyStyle}>
                            <Card.Title>Portfolio</Card.Title>
                            <Card.Text>
                                <div>
                                    <p>Strona, którą obecnie widzisz</p>
                                    <IconsFont project="1" />
                                </div>
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
                                    <p>Strona powstała, aby powtórzyć wiedzę o React Hooks, UseState, UseContext oraz Router DOM</p>
                                    <IconsFont project="2" />
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
                                    <p>Projekt studencki stworzony wraz z kolegą z zespołu. Część odbierająca i rozpoznająca dane stworzona w Pythonie została napisana w całości przeze mnie</p>
                                    <IconsFont project="3" />
                            </Card.Text>
                            <div className="m-auto">
                            <a href="https://github.com/dawidilba/ProjektSystemyMikroprocesorowe" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                            <a href="https://www.youtube.com/watch?v=KuE8tHS_LOY" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-youtube"></i></Button></a>
                        </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/project4m.jpg"} />
                        <Card.Body style={cardBodyStyle}>
                            <Card.Title style={{marginTop: "-50px"}}>Filmoteka</Card.Title>
                            <Card.Text>
                                <p>Projekt studencki napisany w języku C++, wykorzystujący wzorce programowania obiektowego, bibliotekę graficzną FLTK oraz pliki XML</p>
                                <img src={process.env.PUBLIC_URL + "/assets/c++.png"} alt={"C++ icon"} style={{ height: "32px"}}/>   
                            </Card.Text>
                            <div className="m-auto">
                            <a href="https://github.com/dawidilba/Moviebase_Projekt_Programowanie_Obiektowe_C-" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                <Carousel className="d-none d-lg-block" data-aos="zoom-in" data-aos-delay="400">
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project1.jpg"} alt="React Bootstrap project" />
                        <Carousel.Caption className="hero-project">
                            <h3>Portfolio</h3>
                            <p>Strona, którą obecnie widzisz </p>
                            <IconsFont project="1" />
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
                            <p>Strona powstała, aby powtórzyć wiedzę o React Hooks, UseState, UseContext oraz Router DOM</p>
                            <IconsFont project="2" />
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
                            <p>Projekt studencki stworzony wraz z kolegą z zespołu. Część odbierająca i rozpoznająca dane stworzona w Pythonie została napisana w całości przeze mnie</p>
                            <IconsFont project="3" />
                            <div className="w-25 ml-auto mt-n4">
                                <a href="https://github.com/dawidilba/ProjektSystemyMikroprocesorowe" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                                <a href="https://www.youtube.com/watch?v=KuE8tHS_LOY" target="_blank" rel="noopener noreferrer"><Button variant="dark"><i class="fab fa-youtube"></i></Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project4.jpg"} alt="C++ project" />
                        <Carousel.Caption className="hero-project">
                            <h3>Filmoteka</h3>
                                <p>Projekt studencki napisany w języku C++, wykorzystujący wzorce programowania obiektowego, bibliotekę graficzną FLTK oraz pliki XML</p>
                                <img src={process.env.PUBLIC_URL + "/assets/c++.png"} alt={"C++ icon"} style={{ height: "32px"}}/>
                            <div className="w-25 ml-auto mt-n4">
                                <a href="https://github.com/dawidilba/Moviebase_Projekt_Programowanie_Obiektowe_C-" target="_blank" rel="noopener noreferrer"><Button className="mr-1"variant="dark"><i class="fab fa-github"></i></Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </Jumbotron>
    </section>
    )
}