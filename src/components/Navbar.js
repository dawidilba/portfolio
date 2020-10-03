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
                <a href={ process.env.PUBLIC_URL + "/assets/CV_Dawid_ILBA.pdf"} className="link cv" download>Pobierz CV</a>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}





