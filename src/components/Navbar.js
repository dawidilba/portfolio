import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss';

export default function Navigation(){
    return(
        <Navbar collapseOnSelect fixed="top" variant="dark" expand="lg">
            <Navbar.Brand href="#">dAwid ilbA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/portfolio#">Strona główna</Nav.Link>
                <Nav.Link href="#aboutme">O mnie</Nav.Link>
                <Nav.Link href="#skills">Umiejętności</Nav.Link>
                <Nav.Link href="#projects">Projekty</Nav.Link>
                <Nav.Link href="#contact">Kontakt</Nav.Link>
                <Nav.Link href="#download">Pobierz CV</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}





