import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { MailOutlined, MobileOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append("access_key", "0fb1921d-9ca9-4195-b3c3-7f32725b7166");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const responseData = await response.json();
      if (responseData.success) {
        toast.success("Form Submitted Successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(`Error: ${responseData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer />
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Get in Touch</h3>
        <div className="info-section">
          <div className="contact-details">
            <MobileOutlined />
            <div className="contact-topic">Phone : </div>
            <div className="contact-text-number"> &nbsp;&nbsp;9916477467</div>
          </div>
          <div className="contact-details">
            <MailOutlined />
            <div className="contact-topic">Email : </div>
            <div className="contact-text"> &nbsp;&nbsp;rsconstruction.kar@gmail.com</div>
          </div>
          <div className="contact-details">
            <EnvironmentOutlined />
            <div className="contact-topic">Address: </div>
            <div className="contact-text"> &nbsp;&nbsp;Kengeri,<br />
              &nbsp;&nbsp;Bengaluru, Karnataka-560060.</div>
          </div>
        </div>

        <div className="contact-map-container">
          <h3>Location</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.02605402321!2d77.46923074532354!3d12.900585764734101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f30c913d2b7%3A0xe9bbc94ecc89cca2!2sKengeri%2C%20Bengaluru%2C%20Karnataka%20560060!5e1!3m2!1sen!2sin!4v1728983429518!5m2!1sen!2sin" 
           title="locations of rs construction"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
