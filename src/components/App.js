import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.scss'

export default function App(props){
    return(
        <Router>
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
        </Router>
    )
}