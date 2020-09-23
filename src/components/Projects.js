import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../styles/projects.scss';

export default function Projects(){
    return(
        <section id="projects" className="nav-fix">
        <Jumbotron fluid>
            <div class="wrapper" style={{width: "95%", maxWidth: "900px"}}>
                <h2>Projekty</h2>
                <div className="underline" />
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