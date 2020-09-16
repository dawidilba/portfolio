import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import './app.scss'

export default function App(props){
    return(
        <Router>
            <Navbar />
            <Header />
        </Router>
    )
}