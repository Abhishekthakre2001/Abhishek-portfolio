import React, { useEffect } from 'react'
import mypic from '../Images/bg_1.png'
import '../Style/About.css'
import Myqr from '../Images/myqr.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays, faLocationDot, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Corrected import

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations
            easing: 'ease-in-out', // Animation easing function
            once: true, // Whether animation should happen only once or every time you scroll up/down
        });
    }, []);
    return (
        <>
            <div className="container">
                <div className="row align-items-center" >
                    <div className="col-lg-6 col-md-6 col-12 about-image text-center" data-aos="zoom-in">
                        <img src={mypic} alt="Abhishek Thakre" className="img-fluid" style={{ height: "100vh" }} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 about-data">
                        <div className="about-title">
                            <h1 className="big">About</h1>
                            <h2 className="mb-4">About Me</h2>
                        </div>
                        <p>Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.</p>
                        <br />
                        <ul class="about-info mt-4 px-md-0 px-2">
                            <li class="d-flex"><span><FontAwesomeIcon icon={faUser} /></span> <span>Abhishek Thakre</span></li>
                            <li class="d-flex"><span><FontAwesomeIcon icon={faCalendarDays} /></span> <span>July 04, 2001</span></li>
                            <li class="d-flex"><span><FontAwesomeIcon icon={faLocationDot} /></span> <span>Nagpur , MH</span></li>
                            {/* <li class="d-flex"><span><FontAwesomeIcon icon={faPaperPlane} /></span> <span>abhishekpthakre2023@gmail.com</span></li> */}
                            <li class="d-flex"><span><FontAwesomeIcon icon={faPhone} /> </span> <span>9689941705</span></li>
                            <li class="d-flex"><span><FontAwesomeIcon icon={faBriefcase} /> </span> <span>Sky Vision IT Solution's</span></li>
                            <img src={Myqr} alt="" className='myqr' width={100} />
                        </ul>

                        <div class="d-flex justify-content-center">
                            <a href="./Abhishek_Thakre_Resume.pdf" download="./Abhishek_Thakre_Resume.pdf" class="btn px-4 hireme-btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
