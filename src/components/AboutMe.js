import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./aboutMe.scss"

export default function AboutMe(){
    return (
        <section id="aboutme" className="nav-fix">
            <Jumbotron fluid>
                <div className="wrapper">

                    <h2>O mnie</h2>
                    <div className="expand d-flex align-items-center">
                        <div className="portfolio-text mt-4">
                            <p>Aktualnie jestem studentem ostatniego roku elektroniki na Akademii Górniczo-Hutniczej w Krakowie. Interesuję się programowaniem, elektroniką, motoryzacją oraz systemami audio. Swoją przygodę z programowaniem zacząłem już w liceum, poznając podstawy języka C++. Podczas studiów miałem wiele przedmiotów związanych z programowaniem. Poznałem zdecydowanie szerzej język C++, C na mikrokontrolery AVR, C# (podejście obiektowe oraz wzorce projektowe), Python, VHDL, Java. Pod koniec 2019 roku zainteresowałem się programowaniem webowym, i od tamtego czasu staram się regularnie rozwijać swoje umiejętności z tego zakresu.</p>
                        </div>    
                        <img className="portfolio-img mt-3" src={process.env.PUBLIC_URL + "/assets/cv.jpg"}  alt="Zdjecie CV" />
                    </div>
                </div>
            </Jumbotron>
        </section>
    )

}