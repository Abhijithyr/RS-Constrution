import { useState, useEffect } from 'react';
import './Header.css';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
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
              {/* <button className="consultation-btn" onClick={toggleModal}>
                Get free consultation <FaArrowRight className="btn-arrow" />
              </button> */}
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
            <img src={logo} alt="Company Logo" className="mobile-logo" />
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
              {/* <li>
                <button className="mobile-consultation-btn" onClick={() => { toggleModal(); toggleMenu(); }}>
                  Get Free Consultation <FaArrowRight className="btn-arrow" />
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 id="modal-title">Get Free Consultation</h3>
            <p>One of our experts will reach out to you shortly.</p>
            <form className="consultation-form">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Project Details"></textarea>
              <button type="submit" className="submit-btn">
                Submit Request <FaArrowRight className="btn-arrow" />
              </button>
            </form>
            <button
              className="close-modal"
              onClick={toggleModal}
              aria-label="Close consultation modal"
            >
              ×
            </button>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
