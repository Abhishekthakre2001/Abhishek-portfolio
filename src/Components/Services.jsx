import React from 'react'
import '../Style/Services.css'
import { IoDesktop } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Services() {
    AOS.init({
        duration: 1000, // Duration of animations in milliseconds
    });
    return (
        <>
            <div className="skills-section" style={{ position: "relative" }}>
                <h1 className="big">Projects</h1>
                <h2 className="mb-4">Projects</h2>
                <p>These projects demonstrate my ability to turn ideas into functional, impactful applications.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=01">
                            <span className="icon">
                                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                            </span>
                            <div className="desc">
                                <h3 className="mb-5">Billing Apllication</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=02">
                            <span className="icon">
                                <FontAwesomeIcon icon={faQrcode} />
                            </span>
                            <div className="desc">
                                <h3 className="mb-5">QR Attendance</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=03">
                            <span className="icon">
                                <FontAwesomeIcon icon={faShopify} />
                            </span>
                            <div className="desc">
                                <h3 className="mb-5">Shopify App</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=04">
                            <span className="icon">
                                <IoDesktop />
                            </span>
                            <div className="desc">
                                <h3 className="mb-5">Google Crome Extension</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=05">
                            <span className="icon">
                                <FontAwesomeIcon icon={faCloudBolt} />

                            </span>
                            <div className="desc">
                                <h3 className="mb-5">Weather Application</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 text-center d-flex ftco-animate" data-aos="zoom-in">
                        <Link className="services-1" to="/Projectdetail/project=06">
                            <span className="icon">
                                <FontAwesomeIcon icon={faAddressBook} />

                            </span>
                            <div className="desc">
                                <h3 className="mb-5">Portfolio</h3>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
