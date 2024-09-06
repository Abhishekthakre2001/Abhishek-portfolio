import React from 'react'
import '../Style/Hireme.css'
import { Link } from 'react-router-dom';

export default function Hireme() {
    return (
        <>
            <section
                className="ftco-section ftco-hireme img margin-top"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 ftco-animate text-center">
                            <h2>
                                I'm <span style={{color:"#ffbd39", fontSize:"50px"}} >Available</span> for freelancing
                            </h2>
                            <p className="mb-0">
                           
                                <Link to="/Contact"  className="btn btn-primary px-5">Hire Me</Link>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
