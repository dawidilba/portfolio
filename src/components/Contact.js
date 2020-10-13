import React from 'react';
import '../styles/contact.scss';

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-img">
                <div className="contact-hero"></div>
                <div className="contact-text d-flex row wrapper text-white">
                <div className="col-12">
                    <h2 className="text-center mt-4">Kontakt</h2>
                    <div className="underline"></div>
                </div>
                    <div className="col-xs-12 col-sm-6">
                        <p><i className="fas fa-globe-europe" /> Kraków</p>
                        <p><i className="fas fa-mobile-alt" /> 883 038 507</p>
                        <p><i className="far fa-envelope" /> dawidilba@gmail.com</p>
                    </div>
                    <div className="social-media col-xs-12 col-sm-6">
                        <h3>Social media</h3>
                        <a href="http://github.com/dawidilba" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/dawid-ilba/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
