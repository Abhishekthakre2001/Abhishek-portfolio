import React from 'react';
import '../Style/Home.css';
import mypic from '../Images/bg_1.png'
import About from './About';
import Resume from './Resume';
import Service from './Services';
import Skills from './Skills';
import Hireme from './Hireme';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Installapp from './Installapp';

export default function
   Home () {
    return (
        <>
        <div id="container-3e30aae204760b375e09d21e817be4d4"></div>
        <Installapp />
            <div className="container home">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 home-title">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3 typewriter">
                            I'm <span>Abhishek Thakre</span>
                        </h1>
                        <h2 className="mb-4" style={{ marginTop: '50px' }}>Crafting Innovative Web Solutions</h2>
                        <p>
                            <a href="./Abhishek_Thakre_Resume.pdf"  download="./Abhishek_Thakre_Resume.pdf" className="btn btn px-4 hireme-btn">Download CV</a>
                            <Link  className="btn btn px-4 contact-btn" to="/Contact" style={{color: '#ffbd39'}}>Hire Me</Link>
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 home-image text-center" data-aos="zoom-in">
                        <img src={mypic} alt="Abhishek Thakre" className="img-fluid" style={{ height: "100vh" }} />
                    </div>
                </div>
            </div>
            <About />
            <Resume />
            <Service />
            <Skills />
            <Hireme />
            <Contact />
            {/* <Footer /> */}


        </>
    )
}
