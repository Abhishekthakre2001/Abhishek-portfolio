import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/Navbar.css'; // Ensure you have the appropriate CSS file

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">Abhishek</NavLink>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="navbar-toggle"
              onClick={toggleMobileMenu}
              className={isMobileMenuOpen ? 'active' : ''}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  toggleMobileMenu();
                }
              }}
              aria-label="Toggle navigation menu"
            >
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><NavLink className="menu" exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink className="menu" to="/About" activeClassName="active">About</NavLink></li>
            <li><NavLink className="menu" to="/Resume" activeClassName="active">Resume</NavLink></li>
            <li><NavLink className="menu" to="/Services" activeClassName="active">Projects</NavLink></li>
            <li><NavLink className="menu" to="/Skills" activeClassName="active">Skills</NavLink></li>
            <li><NavLink className="menu" to="/Contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
