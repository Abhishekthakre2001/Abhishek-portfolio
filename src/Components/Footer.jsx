import React from 'react'
import '../Style/Footer.css';
import myqr from '../Images/myqr.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer footer-section" >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p style={{ textAlign:"center"}}>
                                    Passionate and dedicated web developer with a strong background in React.js and Node.js, constantly eager to learn and tackle new challenges in the tech world.
                                </p>
                                {/* <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className='social-icons'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className='social-icons'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className='social-icons'>

                                            </span>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                <ul className="list-unstyled" style={{ textAlign:"center"}}>

                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/Resume">Resume</Link></li>
                                    <li><Link to="/Services">Projects</Link></li>
                                    <li><Link to="/Skills">Skills</Link></li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                    <li>
                                        <a href="https://wa.link/9py840" className='links' target='_blank' rel="noopener noreferrer">

                                            <FontAwesomeIcon icon={faWhatsapp} style={{ margin: "0px 10px", fontSize: '30px' }} />
                                            {/* <FontAwesomeIcon icon={faLinkedinIn} style={{ margin:"0px 10px", fontSize:'30px'}} />
                                        <FontAwesomeIcon icon={faInstagram}  style={{ margin:"0px 10px", fontSize:'30px'}}/> */}
                                        </a>
                                        <a href="https://www.linkedin.com/in/abhishek-thakre-3a111024b/" className='links' target='_blank' rel="noopener noreferrer">


                                            <FontAwesomeIcon icon={faLinkedinIn} style={{ margin: "0px 10px", fontSize: '30px' }} />
                                        </a>
                                        <a href="https://github.com/Abhishekthakre2001" className='links' target='_blank' rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} style={{ margin: "0px 10px", fontSize: '30px' }}/>
                                            {/* <FontAwesomeIcon icon={faInstagram} style={{ margin: "0px 10px", fontSize: '30px' }} /> */}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Projects</h2>
                                <ul className="list-unstyled" style={{ textAlign:"center"}}>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            Weather Application
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            Google Crome extension
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            Billing Applicationn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            QR Attendance
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon-long-arrow-right mr-2" />
                                            Shopify App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">To Know More</h2>
                                <div className="block-23 mb-3" style={{ textAlign:"center"}}>
                                    <ul style={{ listStyle: 'none'}}>
                                        <li>

                                            <span className="icon icon-phone" />
                                            <span className="text">9689941705</span>

                                        </li>
                                        <li>

                                            <span className="icon icon-envelope" />
                                            <span className="text">abhishekpthakre2023@gmail.com
                                            </span>

                                        </li>
                                        <li>
                                            <span className="icon icon-map-marker" />
                                            <span className="text">
                                                <img src={myqr} alt="" width={130} style={{ borderRadius: '10px' }} />
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>


        </>

    )
}
