import React, { useState } from "react";
import "./Gallery.css"; // Import CSS file

import img1 from "../components/Images/gallery-4.jpeg";
import img2 from "../components/Images/gallery-3.jpeg";
import img3 from "../components/Images/gallery-2.jpeg";
import img4 from "../components/Images/gallery-19.jpeg"; 

import img5 from "../components/Images/gallery-17.jpeg"; 
import img6 from "../components/Images/gallery-8.jpeg"; 
import img7 from "../components/Images/gallery-1.jpeg"; 
import img8 from "../components/Images/gallery-12.jpeg"; 
import img9 from "../components/Images/gallery-23.jpeg"; 
import img10 from "../components/Images/gallery-20.jpeg"; 
import img11 from "../components/Images/gallery-16.jpeg"; 
import img12 from "../components/Images/gallery-5.jpeg"; 
import img13 from "../components/Images/gallery-6.jpeg"; 
import img14 from "../components/Images/gallery-7.jpeg"; 
import img15 from "../components/Images/gallery-9.jpeg"; 
import img16 from "../components/Images/gallery-10.jpeg"; 
import img17 from "../components/Images/gallery-11.jpeg"; 

import img18 from "../components/Images/gallery-13.jpeg"; 
import img19 from "../components/Images/gallery-14.jpeg"; 
import img20 from "../components/Images/gallery-15.jpeg"; 
import img21 from "../components/Images/gallery-18.jpeg"; 
import img22 from "../components/Images/gallery-21.jpeg"; 

import img23 from "../components/Images/gallery-22.jpeg"; 
import img24 from "../components/Images/gallery-24.jpeg"; 
import img25 from "../components/Images/gallery-25.jpeg"; 
import img26 from "../components/Images/gallery-26.jpeg"; 
import img27 from "../components/Images/gallery-27.jpeg"; 

import img28 from "../components/Images/gallery-28.jpeg"; 
import img29 from "../components/Images/gallery-29.jpeg"; 
import img30 from "../components/Images/gallery-30.jpeg"; 
import img31 from "../components/Images/gallery-31.jpeg"; 
import img32 from "../components/Images/gallery-32.jpeg"; 

import img33 from "../components/Images/gallery-33.jpeg"; 
import img34 from "../components/Images/gallery-34.jpeg"; 
import img35 from "../components/Images/gallery-35.jpeg"; 
import img36 from "../components/Images/gallery-36.jpeg"; 

import img37 from "../components/Images/gallery-37.jpeg"; 
import img38 from "../components/Images/gallery-38.jpeg"; 
import img39 from "../components/Images/gallery-39.jpeg"; 
import img40 from "../components/Images/gallery-40.jpeg"; 

import img41 from "../components/Images/gallery-41.jpeg"; 
import img42 from "../components/Images/gallery-42.jpeg"; 
import img43 from "../components/Images/gallery-43.jpeg"; 
import img44 from "../components/Images/gallery-44.jpeg"; 
import img45 from "../components/Images/gallery-45.jpeg"; 
import img46 from "../components/Images/gallery-46.jpeg"; 
import img47 from "../components/Images/gallery-47.jpeg"; 
import img48 from "../components/Images/gallery-48.jpeg"; 
import img49 from "../components/Images/gallery-49.jpeg"; 
import img50 from "../components/Images/gallery-50.jpeg"; 

import img51 from "../components/Images/gallery-51.jpeg"; 
import img52 from "../components/Images/gallery-52.jpeg"; 
import img53 from "../components/Images/gallery-53.jpeg"; 
import img54 from "../components/Images/gallery-54.jpeg"; 
import img55 from "../components/Images/gallery-55.jpeg"; 
import img56 from "../components/Images/gallery-56.jpeg"; 
import img57 from "../components/Images/gallery-57.jpeg"; 
import img58 from "../components/Images/gallery-58.jpeg"; 
import img59 from "../components/Images/gallery-59.jpeg"; 
import img60 from "../components/Images/gallery-60.jpeg"; 
import img61 from "../components/Images/gallery-61.jpeg"; 
import img62 from "../components/Images/gallery-62.jpeg";
import { Helmet } from "react-helmet-async";


const images = [
  { id: 1, src: img1, alt: "Construction Site 1" },
  { id: 2, src: img2, alt: "Construction Site 2" },
  { id: 3, src: img3, alt: "Construction Site 3" },
  { id: 4, src: img4, alt: "Construction Site 4" },
  { id: 5, src: img5, alt: "Construction Site 5" },
  { id: 6, src: img6, alt: "Construction Site 6" },
  { id: 7, src: img7, alt: "Construction Site 7" },
  { id: 8, src: img8, alt: "Construction Site 8" },
  { id: 9, src: img9, alt: "Construction Site 9" },
  { id: 10, src: img10, alt: "Construction Site 10" },
  { id: 11, src: img11, alt: "Construction Site 11" },
  { id: 12, src: img12, alt: "Construction Site 12" },
  { id: 13, src: img13, alt: "Construction Site 13" },
  { id: 14, src: img14, alt: "Construction Site 14" },
  { id: 15, src: img15, alt: "Construction Site 15" },
  { id: 16, src: img16, alt: "Construction Site 16" },
  { id: 17, src: img17, alt: "Construction Site 17" },
  { id: 18, src: img18, alt: "Construction Site 18" },
  { id: 19, src: img19, alt: "Construction Site 19" },
  { id: 20, src: img20, alt: "Construction Site 20" },
  { id: 21, src: img21, alt: "Construction Site 21" },
  { id: 22, src: img22, alt: "Construction Site 22" },
  { id: 23, src: img23, alt: "Construction Site 23" },
  { id: 24, src: img24, alt: "Construction Site 24" },
  { id: 25, src: img25, alt: "Construction Site 25" },
  { id: 26, src: img26, alt: "Construction Site 26" },
  { id: 27, src: img27, alt: "Construction Site 27" },
  { id: 28, src: img28, alt: "Construction Site 28" },
  { id: 29, src: img29, alt: "Construction Site 29" },
  { id: 30, src: img30, alt: "Construction Site 30" },
  { id: 31, src: img31, alt: "Construction Site 31" },
  { id: 32, src: img32, alt: "Construction Site 32" },
  { id: 33, src: img33, alt: "Construction Site 33" },
  { id: 34, src: img34, alt: "Construction Site 34" },
  { id: 35, src: img35, alt: "Construction Site 35" },
  { id: 36, src: img36, alt: "Construction Site 36" },
  { id: 37, src: img37, alt: "Construction Site 37" },
  { id: 38, src: img38, alt: "Construction Site 38" },
  { id: 39, src: img39, alt: "Construction Site 39" },
  { id: 40, src: img40, alt: "Construction Site 40" },
  { id: 41, src: img41, alt: "Construction Site 41" },
  { id: 42, src: img42, alt: "Construction Site 42" },
  { id: 43, src: img43, alt: "Construction Site 43" },
  { id: 44, src: img44, alt: "Construction Site 44" },
  { id: 45, src: img45, alt: "Construction Site 45" },
  { id: 46, src: img46, alt: "Construction Site 46" },
  { id: 47, src: img47, alt: "Construction Site 47" },
  { id: 48, src: img48, alt: "Construction Site 48" },
  { id: 49, src: img49, alt: "Construction Site 49" },
  { id: 50, src: img50, alt: "Construction Site 50" },
  { id: 51, src: img51, alt: "Construction Site 51" },
  { id: 52, src: img52, alt: "Construction Site 52" },
  { id: 53, src: img53, alt: "Construction Site 53" },
  { id: 54, src: img54, alt: "Construction Site 54" },
  { id: 55, src: img55, alt: "Construction Site 55" },
  { id: 56, src: img56, alt: "Construction Site 56" },
  { id: 57, src: img57, alt: "Construction Site 57" },
  { id: 58, src: img58, alt: "Construction Site 58" },
  { id: 59, src: img59, alt: "Construction Site 59" },
  { id: 60, src: img60, alt: "Construction Site 60" },
  { id: 61, src: img61, alt: "Construction Site 61" },
  { id: 62, src: img62, alt: "Construction Site 62" },
];


const Gallery = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (

    <>
     <Helmet>
        <title>Our Construction Project Gallery | RS Construction Homes</title>
<meta name="description" content="Explore the RS Constructions project gallery featuring residential, commercial, and villa construction in Bangalore. View our completed and ongoing projects built with quality, precision, and modern architectural design."/>
<meta name="keywords" content="RS Constructions Gallery, Construction Gallery Bangalore, Building Projects Bangalore, RS Constructions Projects, Residential Construction Bangalore, Commercial Construction Bangalore, Villa Construction Bangalore, Modern Home Design Gallery, House Construction Photos, Home Interior Gallery Bangalore, Construction Company Projects, Civil Engineering Works Bangalore, Architecture and Design Gallery, Project Showcase Bangalore, Modern Building Designs Bangalore, Construction Work Images Bangalore, Home Builders Gallery, RS Constructions Completed Projects, RS Construction Work Photos, Luxury Home Construction Bangalore"/>
<meta name="robots" content="index, follow"/>
<meta property="og:title" content="Project Gallery – RS Construction Homes"/>
<meta property="og:description" content="Explore our completed construction and renovation projects across Bangalore."/>
<meta property="og:url" content="https://rsconstruction.homes/gallery"/>
<meta property="og:type" content="gallery"/>

      </Helmet>

    <div className="gallery-container">
      <h2>Our Projects Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => setZoomedImage(image.src)}>
            <img src={image.src} alt={image.alt} className="gallery-image" loading="lazy"/>
          </div>
        ))}
      </div>

      {/* Zoomed Image View */}
      {zoomedImage && (
        <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
          <div className="zoomed-content">
            <img src={zoomedImage} alt="Zoomed" className="zoomed-image" loading="lazy"/>
            <button className="close-btn" onClick={() => setZoomedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Gallery;
