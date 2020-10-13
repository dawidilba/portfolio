import React from 'react'
import "../styles/header.scss"
import Nav from 'react-bootstrap/Nav';

export default function Header(){
    return (
        <div className="header-img">
            <div className="hero-img" />
            <div className="hero-text">
                <h1 data-aos="fade-up" data-aos-delay="300">dAwid ilbA</h1>
                <p data-aos="fade-up" data-aos-delay="600">portfolio</p>
                <Nav.Link data-aos="fade-up" data-aos-delay="900" href="#aboutme" className="btn btn-outline-light">poznaj mnie</Nav.Link>
                <Nav.Link href="#aboutme" className="fas fa-angle-double-down"/> 
            </div>
        </div>
    )
}