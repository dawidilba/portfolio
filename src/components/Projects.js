import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/projects.scss';

export default function Projects(){
    return(
        <section id="projects" className="nav-fix">
        <Jumbotron fluid>
            <div class="wrapper">
                <h2>Projekty</h2>
                <div className="underline" />
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project1.jpg"} alt="React Bootstrap project" />
                        <Carousel.Caption>
                            <div className="hero-project">
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project2.jpg"} alt="React project" />
                        <Carousel.Caption>
                            <div className="hero-project">
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assets/project3.jpg"} alt="Python project" />
                        <Carousel.Caption>
                            <div className="hero-project">
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Jumbotron>
    </section>
    )
}