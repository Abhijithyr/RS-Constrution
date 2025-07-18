import './AboutUs.css';
import { FaHardHat, FaTools, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

import aboutImg from '../components/Images/Package-1.png';
import teamImg from '../components/Images/Package-2.png';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Section 1: Who We Are */}
      <section className="about-section">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={aboutImg} alt="About us" />
        </motion.div>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Who We Are</h2>
          <p>
            At RS Construction, we specialize in turning your vision into solid foundations. 
            With our excellence in residential, commercial, and industrial projects, 
            we build lasting structures and relationships.
          </p>
          <div className="about-icons">
            <div className="icon-box"><FaHardHat /> Quality Construction</div>
            <div className="icon-box"><FaTools /> Modern Technology</div>
            <div className="icon-box"><FaUserTie /> Trusted Professionals</div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="choose-section">
        <h2>Why Choose Us</h2>
        <div className="choose-cards">
          <motion.div 
            className="choose-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaCheckCircle className="choose-icon" />
            <h4>Timely Delivery</h4>
            <p>We meet deadlines with professional project management.</p>
          </motion.div>

          <motion.div 
            className="choose-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaTools className="choose-icon" />
            <h4>Modern Equipment</h4>
            <p>We use latest tools and materials for efficient construction.</p>
          </motion.div>

          <motion.div 
            className="choose-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserTie className="choose-icon" />
            <h4>Experienced Team</h4>
            <p>Certified engineers, architects, and on-site supervisors.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Our Mission & Team */}
      <section className="mission-section">
        <motion.div 
          className="mission-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Mission & Team</h2>
          <p>
            We aim to redefine the construction industry with transparency, innovation, and quality. 
            Our team works collaboratively to provide clients with budget-friendly, reliable, and top-notch services.
          </p>
          <ul>
            <li>✔ Client Satisfaction is Our Priority</li>
            <li>✔ Sustainable & Green Construction Focus</li>
            <li>✔ Custom Solutions for Every Project</li>
          </ul>
        </motion.div>
        <motion.div 
          className="mission-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={teamImg} alt="Our team" />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
