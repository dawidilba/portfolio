import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.scss';


export default function App(props){
    useEffect(()=>{
        AOS.init({ duration: 500 });
        AOS.refresh();
    },[])
    return(
        <>
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}