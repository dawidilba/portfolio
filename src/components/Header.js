import React from 'react'
import "../styles/header.scss"
import Nav from 'react-bootstrap/Nav';

export default function Header(){
    return (
        <header>
            <div className="header-img">
                <div className="hero-img"></div>
                <div className="hero-text">
                <h1>dAwid ilbA</h1>
                <p>portfolio</p>
                <Nav.Link href="#aboutme" className="btn btn-outline-light">poznaj mnie</Nav.Link>
                <Nav.Link href="#aboutme" className="fas fa-angle-double-down"/> 
                </div>
            </div>
        </header>
    )
}