import "./RedClayBricks.css";
import { useState } from 'react';

const concretePackagesData = [
    
    
    {
      name: "Standard Package",
      price: "₹2,500/sq.ft",
      features: [
        {
          category: "Core Construction Materials",
          details: [
            {
              text: "Cement",
              description: " - UltraTech Super or Birla Super",
            },
            {
              text: "Steel",
              description: " - Indus, Jindal or JSW",
            },
            {
              text: "Blocks",
              description: " - Standard red clay bricks",
            },
            {
              text: "Sand",
              description: " - M-sand (single wash for all works) P-sand (double wash for plastering)",
            },
            {
              text: "Aggregates",
              description: " - 20mm & 40mm",
            },
            {
              text: "Sump",
              description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 12,000 liters.",
            },
            {
              text: "Clear floor height",
              description: " - 10 feet.",
            },
            {
              text: "Waterproofing",
              description: " - Dr Fixit waterproofing for the terrace",
            },
          ],
        },
        {
          category: "Flooring",
          details: [
            {
              text: "Living, Dining, Rooms & Kitchen",
              description: " - Tiles or granite of price up to ₹150/SFT",
            },
            {
              text: "Balcony & Open areas",
              description: " - Anti skid tiles of value up to ₹80/sq.ft",
            },
            {
              text: "Staircase",
              description: " - Granite of price up to ₹200/sq.ft",
            },
            {
              text: "Parking",
              description: " - Tiles of price up to ₹60/sq.ft",
            },
          ],
        },
        {
          category: "Kitchen",
          details: [
            {
              text: "Wall cladding up to a height of 3 feet above kitchen slab",
              description: " - Ceramic tiles of size 18\"X12\" of price up to ₹100/sq.ft",
            },
            {
              text: "Sink",
              description: " - Fiber sink of price up to ₹10,000/sq.ft",
            },
            {
              text: "Kitchen counter",
              description: " - 30mm thick slab of price up to ₹250/sq.ft",
            },
          ],
        },
        {
          category: "Bathroom",
          details: [
            {
              text: "Wall cladding up to a height of 10 feet",
              description: " - Ceramic tiles of price ₹70/sq.ft",
            },
            {
              text: "Sanitary ware & CP fittings",
              description: " - Total budget for toilets ₹50,000 inclusive of GST of brand Jaquar",
            },
          ],
        },
        {
          category: "Doors & Windows",
          details: [
            {
              text: "Main door",
              description: " - 6\"X4\" Burma teak wood frame, shutter thickness of 32mm of price up to ₹60,000",
            },
            {
              text: "Pooja Room",
              description: " - 5\"X3\" Teak wood frame and solid flush door of price up to ₹40,000",
            },
            {
              text: "Internal Doors",
              description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹20,000",
            },
            {
              text: "Toilet Doors",
              description: " - WPC doors of price up to ₹6,000",
            },
            {
              text: "Windows",
              description: " - Sal wood",
            },
          ],
        },
        {
          category: "Painting",
          details: [
            {
              text: "Wall Putty",
              description: " - Birla wall putty of 2 coats for internal walls",
            },
            {
              text: "Internal walls",
              description: " - Asian internal primer of 1 coat and Royal Emulsion of 2 coats",
            },
            {
              text: "External walls",
              description: " - Asian External primer of 1 coat and Asian Apex Ultima paint of 2 coats",
            },
          ],
        },
        {
          category: "Electrical",
          details: [
            {
              text: "Conduits",
              description: " - ISI make pipes",
            },
            {
              text: "Wires",
              description: " - Finolex, or Equivalent Brand",
            },
            {
              text: "Switches",
              description: " - Legrand or Roma brand",
            },
            {
              text: "MCB",
              description: " - IndoAsian",
            },
          ],
        },
        {
          category: "Plumbing",
          details: [
            {
              text: "Pipes",
              description: " - CPVC and PVC pipes of brand Supreme or Ashirwad",
            },
            {
              text: "Overhead tank",
              description: " - 2,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
            },
          ],
        },
        {
          category: "Fabrication",
          details: [
            {
              text: "Fabrication",
              description: " - SS Staircase Railing With Glass of the price up to ₹1500/sq.ft",
            },
          ],
        },
      ],
    },
  ]

const VillaPackage = () => {
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

  const handleFeatureToggle = (index) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <div className="redclaybricks-packages">
      <h1>Villa Package</h1>
      <div className="redclaybricks-packages-container">
        {concretePackagesData.map((packageItem, packageIndex) => (
          <div key={packageIndex} className="redclaybricks-package">
            <div className="redclaybricks-package-header">
              <h2>{packageItem.name}</h2>
              <p>{packageItem.price}</p>
              <span>{packageIndex ? '−' : '+'}</span>
            </div>
            {packageIndex === 0 && (
              <div className="redclaybricks-package-details">
                {packageItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div className="redclaybricks-feature-header" onClick={() => handleFeatureToggle(featureIndex)}>
                      <h3>{feature.category}</h3>
                      <span>{openFeatureIndex === featureIndex ? '−' : '+'}</span>
                    </div>
                    {openFeatureIndex === featureIndex && (
                      <div className="redclaybricks-feature-details">
                        <ul>
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>
                              <span>{detail.text}</span>
                              {detail.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {packageIndex > 0 && (
              <div className="redclaybricks-package-details">
                {packageItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div className="redclaybricks-feature-header" onClick={() => handleFeatureToggle(featureIndex)}>
                      <h3>{feature.category}</h3>
                      <span>{openFeatureIndex === featureIndex ? '−' : '+'}</span>
                    </div>
                    {openFeatureIndex === featureIndex && (
                      <div className="redclaybricks-feature-details">
                        <ul>
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>
                              <span>{detail.text}</span>
                              {detail.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default VillaPackage
