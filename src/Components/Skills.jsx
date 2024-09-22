import React from 'react'
import '../Style/Skills.css'
import html from '../Skill-images/html-5.png';
import css from '../Skill-images/css-3.png';
import js from '../Skill-images/js.png';
import react from '../Skill-images/reactjs.png';
import nodejs from '../Skill-images/nodejs.png';
import php from '../Skill-images/php.png';
import postman from '../Skill-images/postman.png';
import github from '../Skill-images/github.png';
import bootstrap from '../Skill-images/bootstrap.png';
import mysql from '../Skill-images/mysql.png';
import canva from '../Skill-images/canva.png';
import Shopify from '../Skill-images/Shopify.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    AOS.init({
        duration: 1000, // Duration of animations in milliseconds
      });
    return (
        <>
            <div className="skills-section" >
                {/* <h1 className="big">Skills</h1> */}
                <h2 className="mb-4">Skills</h2>
                <p>Proficient in a diverse set of tools and technologies, including HTML5, CSS3, Bootstrap, React.js,<br/> Node.js, JavaScript, PHP, SQL, GitHub, Postman, Canva, and Shopify</p>
            </div>
            <div className="container Skillcontainer">
                <div className="row">
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={html}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>HTML 5</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={css}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>CSS 3</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={bootstrap}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Bootstrap </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={react}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>React.js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={nodejs}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Node.js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={js}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={php}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>PHP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={mysql}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>SQL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={github}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Github </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={postman}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Postman</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={canva}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Canva</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 col-6" data-aos="zoom-in">
                        <div className="skills-container">
                            <div className="skills-box">
                                <div className="skills-title">
                                    <div className="skills-img">
                                        <img
                                            src={Shopify}
                                            alt=""
                                            className="skills-icons"
                                        />
                                    </div>
                                    <h3>Shopify</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}
