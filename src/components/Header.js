import { useState, useEffect } from 'react';
import './Header.css';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../components/Images/newlogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderSticky(scrollY > 100);
      setShowTopHeader(scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };

  return (
    <header className="header">
      {/* Top Header */}
      <div className={`top-header ${showTopHeader ? 'visible' : 'hidden'}`}>
        <div className="container">
          <div className="top-header-inner">
            <a href="tel:9916477467" className="header-contact">
              <FaPhone className="header-icon" />
              <span>9916477467</span>
            </a>
            <div className="header-contact">
              <FaMapMarkerAlt className="header-icon" />
              <div className="location-map">
                <a href="#location">Karnataka</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`main-header ${isHeaderSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="main-header-inner">
            <a href="/" className="logo">
              <img src={logo} alt="Company Logo" loading="lazy" />
            </a>

            <nav className="desktop-nav">
              <ul>
                <li><a href="/" className="nav-link">Our Homes</a></li>
                <li><a href="/services" className="nav-link">Services</a></li>
                <li><a href="/cost-estimator" className="nav-link">Cost Estimator</a></li>
                <li><a href="/packages" className="nav-link">Packages</a></li>
              </ul>
              
            </nav>

            {/* Mobile Menu Toggle - always visible on all screens */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - visible on all screens when toggled */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-label"
      >
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <img src={logo} alt="Company Logo" className="mobile-logo" loading="lazy"/>
            <button
              className="mobile-menu-close"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="mobile-nav">
            <ul>
              <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
              <li><a href="/services" onClick={toggleMenu}>Services</a></li>
              <li><a href="/cost-estimator" onClick={toggleMenu}>Cost Estimator</a></li>
              <li><a href="/packages" onClick={toggleMenu}>Packages</a></li>
              <li><a href="/gallery" onClick={toggleMenu}>Gallery</a></li>
              <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
              
            </ul>
          </nav>
        </div>
      </div>

      
    </header>
  );
};

export default Header;
