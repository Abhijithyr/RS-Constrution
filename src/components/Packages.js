import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { GiBrickWall, GiVillage } from "react-icons/gi";
import "./Packages.css";

// Images
import Package1 from "../components/Images/Package-1.png";
import Package2 from "../components/Images/Package-2.png";
import Package4 from "../components/Images/Package-4.png";
import Costestimator from "../components/Images/Costestimator.png";

const packages = [
  {
    id: 1,
    title: "RESIDENTIAL BUILDING PACKAGES (CONCRETE BLOCKS)",
    image: Package1,
    content: "Premium construction with high-quality concrete blocks offering durability and modern aesthetics. Ideal for contemporary homes.",
    icon: <FaHome className="package-icon" />,
    path: "/package/concrete-blocks",
    trending: true
  },
  {
    id: 2,
    title: "RESIDENTIAL BUILDING PACKAGES (RED CLAY BRICKS)",
    image: Package2,
    content: "Traditional construction using authentic red clay bricks for timeless appeal and natural insulation properties.",
    icon: <GiBrickWall className="package-icon" />,
    path: "/package/redclay-bricks",
    trending: false
  },
  {
    id: 4,
    title: "VILLA CONSTRUCTION PACKAGE",
    image: Package4,
    content: "Luxury villas with premium finishes, spacious layouts, and high-end amenities for sophisticated living.",
    icon: <GiVillage className="package-icon" />,
    path: "/package/villa-package",
    trending: true
  },
];

const Packages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      mirror: false
    });
  }, []);

  const handleViewMore = (path) => {
    navigate(path);
  };

  return (
    <div className="package-main-container">
      {/* Hero Section */}

            <div
        className="hero"
        style={{
          background: `url(${Costestimator}) no-repeat center center/cover`,
        }}
      >
        <h1 className="hero-title" data-aos="fade-up">
        Packages
        </h1>
      </div>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Featured Construction Packages</h2>
            <p className="section-description">
              Choose from our carefully curated packages designed to meet various construction requirements
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`package-card ${pkg.trending ? 'trending' : ''}`}
                data-aos="fade-up"
                data-aos-delay={pkg.id * 100}
              >
                <div className="package-image-container">
                  <img src={pkg.image} alt={pkg.title} className="package-image" />
                </div>
                <div className="package-content">
                  <div className="package-icon-wrapper">
                    {pkg.icon}
                  </div>
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-description">{pkg.content}</p>
                  <button 
                    className="package-button"
                    onClick={() => handleViewMore(pkg.path)}
                  >
                    View Details <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;