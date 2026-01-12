import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Costestimator from './components/Costestimator';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsappButton from './components/WhatsappButton';
import Packages from './components/Packages';

function App() {

  return (
    <Router>
      <Header />
      <Routes> 

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cost-estimator" element={<Costestimator />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/packages' element={<Packages />} /> 
      
      </Routes>
      <WhatsappButton />
      <Footer />
    </Router>
  );
}

export default App;