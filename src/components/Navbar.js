import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.scss';

export default function Navigation(){
    return(
        <Navbar collapseOnSelect fixed="top" variant="dark" expand="lg">
            <Navbar.Brand href="#">dAwid ilbA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="link" href="/portfolio#">Strona główna</Nav.Link>
                <Nav.Link className="link" href="#aboutme">O mnie</Nav.Link>
                <Nav.Link className="link" href="#skills">Umiejętności</Nav.Link>
                <Nav.Link className="link" href="#projects">Projekty</Nav.Link>
                <Nav.Link className="link" href="#contact">Kontakt</Nav.Link>
                <Nav.Link className="link" href="#download">Pobierz CV</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}





