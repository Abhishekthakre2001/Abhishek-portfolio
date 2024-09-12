import React from 'react';
import '../Style/Resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
    AOS.init({
        duration: 1000, // Duration of animations in milliseconds
    });
    return (
        <>
            <div className="resume">
                <h1 className="big">Resume</h1>
                <h2 className="mb-4">Resume</h2>
                <p>I am a React and Node.js developer at Sky Vision IT Solutions, Nagpur. <br />With 6 months of hands-on experience, I specialize in building dynamic, responsive web applications.</p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 col-6 col-sm-12 resume-box" data-aos="zoom-in">
                        <span class="date">Current</span>
                        <h2>Sky Vision IT Solution's</h2><br /><br />
                        <span class="position">Employee</span><br />
                        <p class="mt-4">I am currently working as a React and Node.js Developer at Sky Vision IT Solutions in Nagpur, MH. My role involves creating and maintaining robust web applications that meet the dynamic needs of our clients.</p>
                    </div>

                    <div className="col-lg-6 col-md-12 col-6 col-sm-12 resume-box" data-aos="zoom-in">
                        <span class="date">Nov 2023 - MAY 2024</span>
                        <h2>Sky Vision IT Solution's</h2><br /><br />
                        <span class="position">Internship </span><br />
                        <p class="mt-4">I successfully completed a six-month internship at Sky Vision IT Solutions, Nagpur, from 11th November 2023 to 11th May 2024. During this period, I gained valuable hands-on experience in web development & Shopify App Devlopment using React and Node.js.</p>
                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-6 col-md-12 col-6 col-sm-12 resume-box" data-aos="zoom-in">
                        <span class="date">2022 - 2024</span>
                        <h2>MCA</h2><br /><br />
                        <span class="position">R.T.M.Nagpur University</span><br />
                        <p class="mt-4">I completed my MCA degree from VMV in 2022-2024 with a strong academic record, where I also acquired various skills in software development and programming.</p>
                    </div>

                    <div className="col-lg-6 col-md-12 col-6 col-sm-12 resume-box" data-aos="zoom-in" >
                        <span class="date">2019 - 2022</span>
                        <h2>B. Sc  ( Computer Science ) </h2><br /><br />
                        <span class="position">R.T.M.Nagpur University</span><br />
                        <p class="mt-4">I completed my Bachelor's degree from VMV in 2019-2022 with a strong academic record, where I also acquired various skills in software development and programming.</p>
                    </div>

                </div>
            </div>

            <div class="d-flex justify-content-center">
                <a href="./Abhishek_Thakre_Resume.pdf" download="./Abhishek_Thakre_Resume.pdf" class="btn px-4 hireme-btn">Download CV</a>
            </div>

        </>
    )
}
