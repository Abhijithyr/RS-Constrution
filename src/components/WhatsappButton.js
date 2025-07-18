import "./WhatsappButton.css"; 
import WhatsApp from '../components/Images/WhatsApp.webp'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919916477467" 
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <img
        src={WhatsApp}
        alt="WhatsApp"
        className="whatsapp-logo"
        loading="lazy"
      />
    </a>
  );
};

export default WhatsappButton;
