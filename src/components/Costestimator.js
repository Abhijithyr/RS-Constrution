import React, { useState, useEffect } from 'react';
import './Costestimator.css';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { toast } from 'react-toastify'; 
import { CalculatorOutlined } from '@ant-design/icons';
import Costestimator from "../components/Images/Costestimator.png"; // Background image for heading
import { Helmet } from "react-helmet-async";

const CostEstimator = () => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '', 
    address: '',
    area: '',
    areaOfCompound: '',
    selectedPackage: '',
  });

  const [costs, setCosts] = useState({ basic: null, standard: null, premium: null });
  const [showCosts, setShowCosts] = useState(false);

  const packageCosts = {
    Residential_Building_Packages_Concrete_Blocks: { basic: 1800, standard: 1950, premium: 2100 },
    Residential_Building_Packages_Red_Clay_Bricks: { basic: 2000, standard: 2150, premium: 2350 },
  };

  const calculateCosts = () => {
    try {
      const area = parseFloat(formData.area) || 0;
      const compoundArea = parseFloat(formData.areaOfCompound) || 0;

      const packageCost = packageCosts[formData.selectedPackage];

      if (!packageCost) return; 

      const newCosts = {
        basic: area * packageCost.basic + compoundArea * 450,
        standard: area * packageCost.standard + compoundArea * 450,
        premium: area * packageCost.premium + compoundArea * 450,
      };

      setCosts(newCosts); 
    } catch (error) {
      console.error('Error calculating costs:', error);
    }
  };

  useEffect(() => {
    calculateCosts();
  }, [formData.area, formData.areaOfCompound, formData.selectedPackage, formData.calculateCosts ]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    data.append('basic_cost', costs.basic?.toFixed(2) || '0');
    data.append('standard_cost', costs.standard?.toFixed(2) || '0');
    data.append('premium_cost', costs.premium?.toFixed(2) || '0');

    data.append('access_key', '0fb1921d-9ca9-4195-b3c3-7f32725b7166');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        toast.success('Form Submitted Successfully!');
        setShowCosts(true);
        setFormData({
          phone: '',
          name: '',
          email: '',
          address: '',
          area: '',
          areaOfCompound: '',
          selectedPackage: '',
        });
      } else {
        toast.error(`Error: ${responseData.message || 'Failed to submit form'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePackageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedPackage: e.target.value,
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <>
      <Helmet>
  <title>Home Construction Cost Estimator Bangalore | RS Construction Homes</title>
  <title>Home Construction Cost Estimator Bangalore | RS Construction Homes</title>
<meta name="description" content="Estimate your home construction cost in Bangalore instantly. RS Construction Homes helps you plan your budget with accurate and transparent pricing."/>
<meta name="keywords" content="Construction Cost Estimator Bangalore, House Construction Cost Bangalore, Construction Cost Calculator, Home Construction Estimate, Building Cost Calculator, RS Constructions Bangalore, Construction Packages Bangalore, Affordable Construction Bangalore, Residential Construction Cost, Civil Work Estimate, Cost to Build a House in Bangalore, Turnkey Construction Estimate, Per Sqft Construction Cost Bangalore, Estimate Your Home Construction Cost, Construction Budget Calculator, Home Building Estimation Bangalore"/>
<meta name="robots" content="index, follow"/>
<meta property="og:title" content="Construction Cost Estimator Bangalore"/>
<meta property="og:description" content="Instantly calculate your construction cost in Bangalore with RS Construction Homes’ cost estimator tool."/>
  <meta property="og:url" content="https://rsconstruction.homes/cost-estimator" />
  <meta property="og:type" content="tool" />
</Helmet>


    <div className="cost-estimator-container">
      <div
        className="hero"
        style={{
          background: `url(${Costestimator}) no-repeat center center/cover`,
        }}
      >
        <h1 className="hero-title" data-aos="fade-up">
        Cost Estimator
        </h1>
      </div>

      <form className="cost-estimator-form" onSubmit={onSubmit}>
        <h2><CalculatorOutlined /> Cost Estimator</h2>

        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your mobile number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Location of Your Plot</label>
          <input
            type="text"
            id="address"
            placeholder="Enter the location"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Super Built Up Area (sq.ft)</label>
          <input
            type="number"
            id="area"
            min="0"
            placeholder="Enter area in sq.ft"
            required
            value={formData.area}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="areaOfCompound">Compound Area 450 Rs/sq.ft</label>
          <input
            type="number"
            id="areaOfCompound"
            min="0"
            required
            placeholder="Enter area in sq.ft"
            value={formData.areaOfCompound}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectedPackage">Select Package</label>
          <select id="selectedPackage" value={formData.selectedPackage} onChange={handlePackageChange}>
            <option value="">-- Select Package --</option> 
            <option value="Residential_Building_Packages_Concrete_Blocks">
              Residential Building Packages (Concrete Blocks)
            </option>
            <option value="Residential_Building_Packages_Red_Clay_Bricks">
              Residential Building Packages (Red Clay Bricks)
            </option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Estimate Cost & Submit</button>
      </form>

      {showCosts && costs.basic !== null && (
        <div className="cost-results">
          <h3>Estimated Costs</h3>
          <div className="cost-result">
            <h4>Basic Package: ₹{costs.basic?.toFixed(2)}</h4>
          </div>
          <div className="cost-result">
            <h4>Standard Package: ₹{costs.standard?.toFixed(2)}</h4>
          </div>
          <div className="cost-result">
            <h4>Premium Package: ₹{costs.premium?.toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CostEstimator;
