import { useState, useEffect } from 'react';
import { FaBuilding, FaHome, FaHardHat, FaTools } from 'react-icons/fa';
import { MdOutlineDesignServices, MdPrecisionManufacturing } from 'react-icons/md';
import { GiBrickWall, GiFloorPolisher } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io';
import './Services.css';
import ServiceHero from '../components/Images/Services.png';
import ResidentialImg from '../components/Images/Package-1.png';
import CommercialImg from '../components/Images/commercial-package.png';
import RenovationImg from '../components/Images/Renovation-services.png';
import InteriorImg from '../components/Images/Interior-services.png';
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [isVisible, setIsVisible] = useState(false);

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

  const services = {
    residential: {
      title: "Residential Construction",
      description: "We specialize in building dream homes that combine functionality with aesthetic appeal. Our residential construction services include everything from custom home building to townhouse developments.",
      features: [
        "Custom home building",
        "Townhouse developments",
        "Duplex construction",
        "Home extensions",
        "Sustainable housing solutions"
      ],
      image: ResidentialImg,
      icon: <FaHome className="service-icon" />
    },
    commercial: {
      title: "Commercial Construction",
      description: "From office buildings to retail spaces, we deliver commercial projects that meet business needs while adhering to strict safety and quality standards.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Industrial facilities",
        "Mixed-use developments",
        "Commercial interiors"
      ],
      image: CommercialImg,
      icon: <FaBuilding className="service-icon" />
    },
    renovation: {
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our professional renovation services. We breathe new life into old structures while preserving their character.",
      features: [
        "Home remodeling",
        "Structural renovations",
        "Facade upgrades",
        "Space reconfiguration",
        "Heritage restoration"
      ],
      image: RenovationImg,
      icon: <FaTools className="service-icon" />
    },
    interior: {
      title: "Interior Construction",
      description: "Complete interior solutions from concept to completion. We create functional, beautiful spaces tailored to your lifestyle or business needs.",
      features: [
        "Custom cabinetry",
        "Wall systems",
        "Ceiling installations",
        "Flooring solutions",
        "Lighting design"
      ],
      image: InteriorImg,
      icon: <MdOutlineDesignServices className="service-icon" />
    }
  };

  const specialties = [
    {
      icon: <GiBrickWall className="specialty-icon" />,
      title: "Masonry Work",
      description: "Expert brick and stone work for durable, beautiful structures"
    },
    {
      icon: <IoIosConstruct className="specialty-icon" />,
      title: "Structural Framing",
      description: "Precision framing for solid building skeletons"
    },
    {
      icon: <GiFloorPolisher className="specialty-icon" />,
      title: "Flooring Systems",
      description: "Quality flooring installations for every need"
    },
    {
      icon: <MdPrecisionManufacturing className="specialty-icon" />,
      title: "Precision Work",
      description: "Meticulous attention to every detail"
    },
    {
      icon: <FaHardHat className="specialty-icon" />,
      title: "Safety Compliance",
      description: "Strict adherence to all safety regulations"
    }
  ];

  return (

    <>
      <Helmet>
        <title>Construction & Renovation Services in Bangalore | RS Construction Homes</title>
        <meta name="description" content="RS Constructions provides professional construction services in Bangalore, including residential, commercial, interior design, and turnkey projects. Quality-driven, affordable, and on-time delivery for every project."/>
        <meta name="keywords" content="Construction Services Bangalore, Residential Construction Bangalore, Commercial Construction Bangalore, Turnkey Projects Bangalore, Interior Design Bangalore, Building Contractors Bangalore, RS Constructions, Home Construction Services Bangalore, House Building Services, Apartment Construction, Villa Construction, Civil Engineering Services Bangalore, Best Construction Company Bangalore, Structural Design Bangalore, End-to-End Construction Bangalore, Renovation Services Bangalore, Civil Contractors Bangalore, Home Builders Bangalore, Turnkey Construction Solutions, Construction Management Bangalore"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Construction & Renovation Services in Bangalore"/>
        <meta property="og:description" content="From design to delivery — full-service construction and renovation in Bangalore by RS Construction Homes."/>
        <meta property="og:url" content="https://rsconstruction.homes/services"/>
        <meta property="og:type" content="website"/> 

      </Helmet>

    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <img src={ServiceHero} alt="Construction services" className="hero-image" loading="lazy"/>
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'animate' : ''}`}>Our Construction Services</h1>
        </div>
      </section>

      {/* Services Tabs */}
      <section className={`services-section animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Construction Solutions</h2>
            <p className="section-description">
              We offer a full range of construction services tailored to meet your specific needs
            </p>
          </div>

          <div className="services-tabs">
            {Object.keys(services).map((serviceKey) => (
              <button
                key={serviceKey}
                className={`tab-btn ${activeTab === serviceKey ? 'active' : ''}`}
                onClick={() => setActiveTab(serviceKey)}
              >
                {services[serviceKey].icon}
                {services[serviceKey].title}
              </button>
            ))}
          </div>

          <div className="service-details">
            <div className="service-info">
              <h3>{services[activeTab].title}</h3>
              <p>{services[activeTab].description}</p>
              <ul>
                {services[activeTab].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service-image">
              <img src={services[activeTab].image} alt={services[activeTab].title} loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className={`specialties-section animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-description">
              Areas where we excel and deliver exceptional results
            </p>
          </div>

          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="specialty-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="specialty-icon-container">
                  {specialty.icon}
                </div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Services;