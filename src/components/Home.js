import { useState, useEffect } from 'react';
import { 

  FaMoneyBillWave, 
  FaSearchDollar, 
  FaClipboardCheck, 
  FaClock,
  FaArrowRight,
} from 'react-icons/fa';

import './Home.css';

// Hero images imports (replace with your actual paths)
import HeroImage1 from "../components/Images/Home-Image1.png";
import HeroImage2 from "../components/Images/Home-Image3.png";

// Services images (replace with your actual paths)
import ResidentialImg from "../components/Images/Package-1.png";
import CommercialImg from "../components/Images/commercial-package.png";
import VillaImg from "../components/Images/Package-4.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const heroImages = [HeroImage1, HeroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); 

  // Hero image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      image: ResidentialImg,
      title: "RESIDENTIAL CONSTRUCTION",
      subtitle: "Dream homes tailored to you",
      description: "We build premium furnished and semi-furnished homes...",
      link: "/packages"
    },
    {
      image: CommercialImg,
      title: "COMMERCIAL CONSTRUCTION",
      subtitle: "Spaces that inspire business",
      description: "Creating innovative commercial spaces...",
      link: "/packages"
    },
    {
      image: VillaImg,
      title: "VILLA CONSTRUCTION",
      subtitle: "Luxury living redefined",
      description: "Custom villas blending modern design...",
      link: "/packages"
    }
  ];

  const features = [
    {
      icon: <FaMoneyBillWave className="feature-icon" />,
      title: "Safe Transactions",
      description: "Pay only after work completion..."
    },
    {
      icon: <FaSearchDollar className="feature-icon" />,
      title: "Full Transparency",
      description: "Real-time project tracking..."
    },
    {
      icon: <FaClipboardCheck className="feature-icon" />,
      title: "Quality Assurance",
      description: "500+ quality checks..."
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "On-Time Delivery",
      description: "98% of projects delivered..."
    }
  ];

  return (
    <>

    <Helmet>

      <title>Residential & Commercial Construction in Bangalore | RS Construction Homes</title>
      <meta name="description" content="RS Construction Homes provides top-quality residential and commercial construction, renovation, and interior design services in Bangalore. Get your free consultation today!"/>
      <meta name="keywords" content="Construction company in Bangalore, home construction, renovation, builders, residential contractors, RS Construction Homes,RS Constructions, RS Construction Bangalore, Construction Company in Bangalore, Building Contractors in Bangalore, Best Construction Company in Bangalore, Civil Engineering Contractors Bangalore, Residential Builders in Bangalore, Home Construction in Bangalore, House Construction in Bangalore, Commercial Builders Bangalore, Turnkey Construction Services Bangalore, Modern Home Builders Bangalore, Affordable Construction Packages Bangalore, Construction Cost Estimator Bangalore, Civil Work Contractors Bangalore, Trusted Construction Company in Bangalore, Top Builders in Bangalore, Best Construction Services Bangalore, Residential Construction Company, Construction Near Me Bangalore"/>
      <meta name="robots" content="index, follow"/>
      <meta property="og:title" content="Residential & Commercial Construction in Bangalore | RS Construction Homes"/>
      <meta property="og:description" content="Trusted construction company offering residential and commercial projects in Bangalore. Quality workmanship and timely delivery."/>
      <meta property="og:url" content="https://rsconstruction.homes/"/>
      <meta property="og:type" content="website"/>              
    </Helmet>

    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section-home">
        <div className="hero-carousel">
          <img 
            src={heroImages[currentImageIndex]} 
            alt="Construction showcase" 
            className="hero-image" 
            loading="lazy"
          />
          <div className="hero-overlay">
            <h1 className={`hero-title-home ${isVisible ? 'animate' : ''}`}>
              Building Your Vision, Crafting Quality
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services-section animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Construction Services</h2>
            <p className="section-description">
              Comprehensive solutions from concept to completion
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="card-image-container">
                  <img src={service.image} alt={service.title} loading="lazy"/>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <div className="divider"></div>
                  <p className="service-description">{service.description}</p>
                  <a href={service.link} className="service-link">
                    Learn More <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={`features-section animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose RS Construction?</h2>
            <p className="section-description">
              Excellence in every brick we lay and every promise we make
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default Home;
