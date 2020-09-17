import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./header.scss"

export default function Header(){
    return (
        <header>
            <div className="header-img">
                <div className="hero-img"></div>
                <div className="hero-text">
                <h1>dAwid ilbA</h1>
                <p>portfolio</p>
                <Link to="#aboutme" className="btn btn-outline-light">poznaj mnie</Link>
                <Link to="#aboutme" className="fas fa-angle-double-down"/> 
                </div>
            </div>
        </header>
    )
}