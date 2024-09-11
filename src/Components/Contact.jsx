import React, { useState } from 'react';
import '../Style/Contact.css';
import { IoIosCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    const [loading, setLoading] = useState(false);

    const emailForm = async (event) => {
        event.preventDefault();
        setLoading(true); // Show the loading indicator

        const emailBody = {
            mailto: "abhishekthakare060@gmail.com",
            subject: subject || "No Subject",
            message: `<h1>Hi Abhishek,</h1>
                        <br>
                        <p>You have received a new message from your portfolio contact form.</p>
                        <br>
                        <b>Details:</b>
                        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
                            <tr>
                               <th><b>Name:</b></th>
                              <td>${name}</td>
                             </tr>
                             <tr>
                                 <th><b>Email:</b></th>
                                 <td>${email}</td>
                             </tr>
                             <tr>
                                <th><b>Subject:</b></th>
                                <td>${subject}</td>
                             </tr>
                             <tr>
                                <th><b>Message:</b></th>
                                <td>${message}</td>
                            </tr>
                        </table>
                    <br>
                    <p>Looking forward to your response!</p>
                    <br>
                    <b>Best regards,</b>
                    <br>
                    <p>${name}</p>
                    `,
            username: "abhishekthakare060@gmail.com",
            apppassword: "efwvybdtgkmqmadf",
            senderName: "PORTFOLIO"
        };

        try {
            const response = await axios.post('https://svemailapi.onrender.com/mail', emailBody);
            if (response.status === 200) {
                toast('Thank for Get in Touch!',
                    {
                        icon: '👏',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
                setname("");
                setemail("");
                setsubject("");
                setmessage("")

            } else {
                alert('Failed to send the message. Please try again later.');
            }
        } catch (error) {
            console.error("There was an error sending the email:", error);
            alert('Failed to send the message. Please try again later.');
        } finally {
            setLoading(false); // Hide the loading indicator
        }
    };

    AOS.init({
        duration: 1000, // Duration of animations in milliseconds
    });

    return (
        <>
            <Toaster />
            <div className="contact">
                <h1 className="big">Contact</h1>
                <h2 className="mb-4">Contact</h2>
                <p>Feel free to reach out to me for any inquiries, collaborations, or opportunities. <br />I'm always open to connecting and discussing new ideas</p>
            </div>
            <div className="row d-flex contact-info mb-5" data-aos="zoom-in">
                <div className="col-md-6 col-lg-3 col-6  ftco-animate">
                    <div className="contact-box">
                        <a href="https://github.com/Abhishekthakre2001" target="_blank" rel="noopener noreferrer" >
                            <div className="Icon" style={{ margin: "0px 31px 31px 31px" }}>
                                {/* <span className="icon-map-signs" /> */}
                                <span>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </div>
                            <h3 className="mb-4">Github</h3>
                            <p style={{ color: '#999999' }}>AbhishekThakre2001</p>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 col-6 ftco-animate" data-aos="zoom-in">
                    <div className="contact-box">
                        <a href="https://www.linkedin.com/in/abhishek-thakre-3a111024b/" target="_blank" rel="noopener noreferrer" >
                            <div className="Icon" style={{ margin: "0px 31px 31px 31px" }}>
                                {/* <span className="icon-map-signs" /> */}
                                <span><FontAwesomeIcon icon={faLinkedin} />                        </span>
                            </div>
                            <h3 className="mb-4">Linkedin</h3>
                            <p style={{ color: '#999999' }}>Abhishek Thakre</p>
                        </a>
                    </div>
                </div>


                <div className="col-md-6 col-lg-3 col-6  ftco-animate" data-aos="zoom-in">
                    <div className="contact-box">
                        <a href="https://wa.link/1jdatp" target="_blank" rel="noopener noreferrer">
                            <div className="Icon" style={{ margin: "0px 31px 31px 31px" }}>
                                {/* <span className="icon-map-signs" /> */}
                                <span><IoIosCall /></span>
                            </div>
                            <h3 className="mb-4">Contact</h3>
                            <p style={{ color: '#999999' }}>9689941705</p>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 col-6 ftco-animate" data-aos="zoom-in">
                    <div className="contact-box">
                        <a href="mailto:abhishekthakre060@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="Icon" style={{ margin: "0px 31px 31px 31px" }}>
                                {/* <span className="icon-map-signs" /> */}
                                <span><FaTelegramPlane /></span>
                            </div>
                            <h3 className="mb-4">E-mail</h3>
                            <p style={{ color: '#999999' }}>abhishekthakre060@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
            {/* contact form  */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 contact-form-box">
                        <div className="contact-form-box-img" />
                    </div>
                    <div className="col-md-6 contact-form-box order-md-last ">
                        <form onSubmit={emailForm} className="bg-light p-4 p-md-5 contact-form">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={(e) => setname(e.target.value)}
                                    required
                                    value={name}
                                />
                                <label htmlFor="floatingInputCustom">Your Name</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={(e) => setemail(e.target.value)}
                                    required
                                    value={email}
                                />
                                <label htmlFor="floatingInputCustom">Your Email</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e) => setsubject(e.target.value)}
                                    required
                                    value={subject}
                                />
                                <label htmlFor="floatingInputCustom">Subject</label>
                            </Form.Floating>
                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a Message here"
                                    style={{ height: '100px' }}
                                    onChange={(e) => setmessage(e.target.value)}
                                    required
                                    value={message}
                                />
                            </FloatingLabel>
                            <Button className='send-message' type='submit' disabled={loading} >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
