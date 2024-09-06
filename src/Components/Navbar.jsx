// import React from 'react';
// import '../Style/Navbar.css';
// import Home from './Home';
// import About from './About';
// import Resume from './Resume';
// import Skills from './Skills';
// import Service from './Services'
// import Hireme from './Hireme';
// import Contact from './Contact';
// import Footer from './Footer';
// import { Link  } from 'react-router-dom';

// export default function Navbar() {
//   return (
//   <>
//   <nav class="navbar">
//         <div class="navbar-container container">
//             <input type="checkbox" name="" id="" style={{ color: 'white' }}/>
//             <div class="hamburger-lines">
//                 <span class="line line1"></span>
//                 <span class="line line2"></span>
//                 <span class="line line3"></span>
//             </div>
//             <ul class="menu-items">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/About">About</Link></li>
//                 <li><Link to="/Resume">Resume</Link></li>
//                 <li><Link to="/Services">Project</Link></li>
//                 <li><Link to="/Skills">Skills</Link></li>
//                 <li><Link to="/Contact">Contact</Link></li>
//             </ul>
//             <h1 className='mylogo'>Abhishek</h1>
//             {/* <img src={logo} alt=""  width={50}/> */}
//         </div>
//     </nav>
//     <Home />
//     <About />
//     <Resume />
//     <Service />
//     <Skills />
//     <Hireme />
//     <Contact />
//     <Footer />
//   </>
//   )
// }

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Style/Navbar.css';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container container">
//         <input type="checkbox" name="" id="" style={{ color: 'white' }} />
//         <div className="hamburger-lines">
//           <span className="line line1"></span>
//           <span className="line line2"></span>
//           <span className="line line3"></span>
//         </div>
//         <ul className="menu-items">
//           <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
//           <li><NavLink to="/About" activeClassName="active">About</NavLink></li>
//           <li><NavLink to="/Resume" activeClassName="active">Resume</NavLink></li>
//           <li><NavLink to="/Services" activeClassName="active">Projects</NavLink></li>
//           <li><NavLink to="/Skills" activeClassName="active">Skills</NavLink></li>
//           <li><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
//         </ul>
//         <h1 className="mylogo">Abhishek</h1>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Navbar.css'; // Ensure you have the appropriate CSS file

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  console.log(toggleDropdown)

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">Abhishek</NavLink>
        </div>
        <nav>
          <div className="nav-mobile">
            <button id="navbar-toggle" onClick={toggleMobileMenu} className={isMobileMenuOpen ? 'active' : ''}>
              <span></span>
            </button>
          </div>
          <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><NavLink  className='menu'  exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink className='menu' to="/About" activeClassName="active">About</NavLink></li>
            <li><NavLink  className='menu' to="/Resume" activeClassName="active">Resume</NavLink></li>
            <li><NavLink  className='menu' to="/Services" activeClassName="active">Projects</NavLink></li>
            <li><NavLink  className='menu' to="/Skills" activeClassName="active">Skills</NavLink></li>
            <li><NavLink className='menu'  to="/Contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
