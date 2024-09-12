import React, { useState } from 'react';
import '../Style/Projectdetail.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import DOMPurify from 'dompurify';
import Pagenotfound from './Pagenotfound.jsx';

export default function Projectdetail() {
    const [mainImage, setMainImage] = useState("");
    const [info, setinfo] = useState('Loading....');
    const [github, setgithub] = useState('');
    const [projectdemo, setprojectdemo] = useState('');
    const [frontend, setfrontend] = useState([]);
    const [Backend, setbackend] = useState([]);
    const [database, setdatabase] = useState('');
    const [projecttitle, setprojecttitle] = useState('');
    const [smallImages, setsmallImages] = useState([]);
    const [validpage , setvalidpage] = useState();


    // const smallImages = [
    //     "../Project-images/image.png",
    //     "data:image/jpeg;base64,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",
    //     "https://placehold.co/300x300",
    //     "data:image/png;base64,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",
    //     "https://placehold.co/300x300",
    //     "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053803.jpg?t=st=1724864967~exp=1724868567~hmac=0f75f24ab6e1dfac9fcae60d06439207474eb09dbb724ba6b5c38a4d70b9cc14&w=996",
    // ];




    useEffect(() => {
        const path = window.location.pathname;
        const projectValue = path.split('=')[1]; // Extract 'Sky' from '/Projectdetail/project=Sky'
        console.log("project name", projectValue);
        // Fetch data from the JSON file
        fetch('https://at-demo.netlify.app/Projectdata.json')
            .then(response => response.json())  // Parse the JSON data
            .then(data => {
                // Filter the data by project name
                const projectname = projectValue;  // The project name you want to search for
                const filteredProject = data.find(project => project.id === projectname);

                if (filteredProject) {
                    console.log('Project found:', filteredProject);
                    const sanitizedInfo = DOMPurify.sanitize(filteredProject.information);
                    setinfo(sanitizedInfo);
                    setdatabase(filteredProject.database);
                    setgithub(filteredProject.github);
                    setprojectdemo(filteredProject.projecturl);
                    setfrontend(filteredProject.frontend);
                    setbackend(filteredProject.backend);
                    setprojecttitle(filteredProject.projectname);
                    setMainImage(filteredProject.images[0]);
                    setsmallImages(filteredProject.images);
                    setvalidpage(true);
                    console.log("main image",filteredProject.images)
                    // You can now use the filteredProject object
                } else {
                    console.log('Project not found');
                    setvalidpage(false);
                    console.log("validpage",validpage)
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [validpage])

    return (
        <>
     {validpage ? (

        <div className="container project-detail-container">
            <div className="contact">
                <h1 className="big">Project</h1>
                <h2 className="mb-4">Project</h2>
                <p>A curated collection of our most impactful and innovative work.</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 col-12 project-details-images">
                    <div className="main-image-container">
                        <img src={mainImage} alt="Main Project" className="main-image" />
                    </div>
                    <div className="multiimages">
                        {smallImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Small ${index + 1}`}
                                onClick={() => setMainImage(image)}
                                className="small-image"
                            />
                        ))}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 col-12 project-details-data">


                    <h2 id="blog-author">{projecttitle}</h2>
                    <hr />
                    <div className="frontend" >
                        <strong>Technology : </strong>
                    </div>

                    <div className="projectdata1">

                        {frontend.map((tech, index) => (
                            <span key={index} className='badge'>{tech}</span>
                        ))}
                        {Backend.map((tech, index) => (
                            <span key={index} className='badge'>{tech}</span>
                        ))}
                        <span className='badge'>{database}</span>
                    </div>
                    <br />
                    
                   
                    <div className="frontend" >
                        <strong>Information : </strong>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: info }} />
                 
                    <a className="btn btn-primary" href={github} target='_blank' rel="noopener noreferrer" role="button" style={{ borderRadius: '50%', margin: '20px' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }} />
                    </a>
                    <a className="btn btn-primary" href={projectdemo} target='_blank' rel="noopener noreferrer" role="button">
                        View Project
                    </a>


                </div>
            </div>
        </div>
     ) : (
    < Pagenotfound />
     )}
       
        </>
    );
}
