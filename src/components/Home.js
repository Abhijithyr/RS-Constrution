import React, { useState, useEffect } from 'react';
import { 
  // FaPlay,
  // FaDraftingCompass,
  // FaFileSignature,
  // FaHardHat,
  // FaMapMarkerAlt,
  // FaCheckCircle,
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

// const stepIcons = [
//   <FaPlay />, <FaDraftingCompass />, <FaFileSignature />,
//   <FaHardHat />, <FaMapMarkerAlt />, <FaCheckCircle />
// ];

// const steps = [
//   {
//     id: 1,
//     title: 'Lets Get Started',
//     image: HeroImage1,
//     description:
//       'Enquire and schedule an appointment with our experts to discuss your requirements...',
//     points: [
//       'Understanding the construction requirements of the client.',
//       'Defining Client Construction Criteria.',
//     ],
//   },
//   {
//     id: 2,
//     title: 'Design Specifications',
//     image: HeroImage2,
//     description:
//       'Our excellent in-house team of architects initiate the design process...',
//     points: [
//       'Provide 3D architectural floor plan and elevation designs.',
//       'Ensure the design is Vaastu compliant.',
//     ],
//   },
//   {
//     id: 3,
//     title: 'Client Agreement',
//     image: HeroImage3,
//     description:
//       'Once the design is approved, the costing is finalized...',
//     points: [
//       'No subcontracting of any kind.',
//       'Commitment to transparency from the start of the contract.',
//     ],
//   },
//   {
//     id: 4,
//     title: 'Construction & Updates',
//     image: HeroImage4,
//     description:
//       'Construction begins within 30-45 days following the signing...',
//     points: [
//       'Monitor and track progress through buildAhome App.',
//       'Distinct Communication at Every Step.',
//     ],
//   },
//   {
//     id: 5,
//     title: 'Site Visits',
//     image: HeroImage1,
//     description:
//       'Regular site visits by architects, structural & MEP designers...',
//     points: [
//       'Comprehensive Site and Material Management.',
//       'Periodic visits by Quality & Safety teams.',
//     ],
//   },
//   {
//     id: 6,
//     title: 'Completion & Handover',
//     image: HeroImage1,
//     description:
//       'The ultimate project handover marks the successful completion...',
//     points: [
//       'Complete Final Inspection and handover kit is given.',
//       'Ongoing Support and Satisfaction Assurance.',
//     ],
//   },
// ];

const Home = () => {
  const heroImages = [HeroImage1, HeroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // const [activeTab, setActiveTab] = useState(1);

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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section-home">
        <div className="hero-carousel">
          <img 
            src={heroImages[currentImageIndex]} 
            alt="Construction showcase" 
            className="hero-image" 
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
                  <img src={service.image} alt={service.title} />
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

      {/* Working Steps Section */}
      {/* <section className="how-it-works-main-wrapper animate-on-scroll">
        <div className="container">
          <div className="common-heading">
            <h3>Working Steps</h3>
            <h2>Your Roadmap to Building the Home of Your Dreams</h2>
          </div>

          <div className="working-steps-main">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`working-step ${activeTab === step.id ? 'active' : ''}`}
                onClick={() => setActiveTab(step.id)}
              >
                <span className="step-icon">{stepIcons[index]}</span>
                <p>{step.title}</p>
              </div>
            ))}
          </div>

          <div className="working-steps-content">
            {steps.map((step) =>
              activeTab === step.id ? (
                <div key={step.id} className="tab-content active">
                  <div className="step-content-main">
                    <div className="step-content-left">
                      <img loading="lazy" src={step.image} alt={`Image for ${step.title}`} />
                    </div>
                    <div className="step-content-right">
                      <h2>{step.title}</h2>
                      <p>{step.description}</p>
                      <ul className="common-ul">
                        {step.points.map((point, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="check-icon" /> {point}
                          </li>
                        ))}
                      </ul>
                      <div className="common-btn">
                        <a href="/how-it-works">Know More</a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
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
  );
};

export default Home;
