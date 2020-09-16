import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.scss'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-md fixed-top" id="navbar">
            <Link to="/" className="navbar-brand">dAwid ilbA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/" className="nav-item nav-link active">Strona główna</Link>
                    <Link to="/" className="nav-item nav-link">O mnie</Link>
                    <Link to="/" className="nav-item nav-link">Umiejętności</Link>
                    <Link to="/" className="nav-item nav-link">Projekty</Link>
                    <Link to="/" className="nav-item nav-link">Kontakt</Link>
                </div>
            </div>
        </nav>
    )

}





