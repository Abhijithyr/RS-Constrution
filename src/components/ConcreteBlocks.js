import "./ConcreteBlocks.css";
import { useState } from 'react';

const concretePackagesData = [
  {
    name: "Basic Package",
    price: "₹1,850/sq.ft",
    features: [
      {
        category: "Core Construction Materials",
        details: [
          {
            text: "Cement",
            description: " - Ramco, Zuari, Priya or equivalent",
          },
          {
            text: "Steel",
            description: " - A1 Gold",
          },
          {
            text: "Blocks",
            description: " - Standard concrete blocks",
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
            description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 5,000 liters.",
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
            description: " - Tiles of price up to ₹50/SFT",
          },
          {
            text: "Balcony & Open areas",
            description: " - Anti skid tiles of value up to ₹40/sq.ft",
          },
          {
            text: "Staircase",
            description: " - Granite of price up to ₹100/sq.ft",
          },
          {
            text: "Parking",
            description: " - Tiles of price up to ₹40/sq.ft",
          },
        ],
      },
      {
        category: "Kitchen",
        details: [
          {
            text: "Wall cladding up to a height of 3 feet above kitchen slab",
            description: " - Ceramic tiles of size 18\"X12\" of price up to ₹50/sq.ft",
          },
          {
            text: "Sink",
            description: " - Steel sink of price up to ₹5,000/sq.ft",
          },
          {
            text: "Kitchen counter",
            description: " - 30mm thick slab of price up to ₹150/sq.ft",
          },
        ],
      },
      {
        category: "Bathroom",
        details: [
          {
            text: "Wall cladding up to a height of 7 feet",
            description: " - Ceramic tiles of price ₹50/sq.ft",
          },
          {
            text: "Sanitary ware & CP fittings",
            description: " - Total budget for toilets ₹30,000 inclusive of GST of brand Classy, Elvis, Parryware or Equivalent",
          },
        ],
      },
      {
        category: "Doors & Windows",
        details: [
          {
            text: "Main door",
            description: " - 6\"X4\" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹30,000",
          },
          {
            text: "Pooja Room",
            description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹12,000",
          },
          {
            text: "Internal Doors",
            description: " - 5\"X3\" Neem wood frame and solid flush door of price up to ₹10,000",
          },
          {
            text: "Toilet Doors",
            description: " - PVC doors of price up to ₹3,000",
          },
          {
            text: "Windows",
            description: " - Aluminium",
          },
        ],
      },
      {
        category: "Painting",
        details: [
          {
            text: "Wall Putty",
            description: " - Asian wall putty of 2 coats for internal walls",
          },
          {
            text: "Internal walls",
            description: " - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats",
          },
          {
            text: "External walls",
            description: " - Asian External primer of 1 coat and Asian Apex paint of 2 coats",
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
            description: " - Hi-Fi brand",
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
            description: " - 1,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
          },
        ],
      },
      {
        category: "Fabrication",
        details: [
          {
            text: "Fabrication",
            description: " - MS Staircase Railing of the price up to ₹300/SFT",
          },
        ],
      },
    ],
  },
  {
    name: "Standard Package",
    price: "₹2,000/sq.ft",
    features: [
      {
        category: "Core Construction Materials",
        details: [
          {
            text: "Cement",
            description: " - UltraTech, Birla A1 or equivalent",
          },
          {
            text: "Steel",
            description: " - SK or Sunvik",
          },
          {
            text: "Blocks",
            description: " - Standard concrete blocks",
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
            description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 8,000 liters.",
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
            description: " - Tiles of price up to ₹70/SFT",
          },
          {
            text: "Balcony & Open areas",
            description: " - Anti skid tiles of value up to ₹50/sq.ft",
          },
          {
            text: "Staircase",
            description: " - Granite of price up to ₹120/sq.ft",
          },
          {
            text: "Parking",
            description: " - Tiles of price up to ₹50/sq.ft",
          },
        ],
      },
      {
        category: "Kitchen",
        details: [
          {
            text: "Wall cladding up to a height of 3 feet above kitchen slab",
            description: " - Ceramic tiles of size 18\"X12\" of price up to ₹70/sq.ft",
          },
          {
            text: "Sink",
            description: " - Fiber sink of price up to ₹6,500/sq.ft",
          },
          {
            text: "Kitchen counter",
            description: " - 30mm thick slab of price up to ₹180/sq.ft",
          },
        ],
      },
      {
        category: "Bathroom",
        details: [
          {
            text: "Wall cladding up to a height of 7 feet",
            description: " - Ceramic tiles of price ₹60/sq.ft",
          },
          {
            text: "Sanitary ware & CP fittings",
            description: " - Total budget for toilets ₹30,000 inclusive of GST of brand Cera or Varmora",
          },
        ],
      },
      {
        category: "Doors & Windows",
        details: [
          {
            text: "Main door",
            description: " - 6\"X4\" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹40,000",
          },
          {
            text: "Pooja Room",
            description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹20,000",
          },
          {
            text: "Internal Doors",
            description: " - 5\"X3\" Neem wood frame and solid flush door of price up to ₹10,000",
          },
          {
            text: "Toilet Doors",
            description: " - PVC doors of price up to ₹5,000",
          },
          {
            text: "Windows",
            description: " - UPVC or Neem wood",
          },
        ],
      },
      {
        category: "Painting",
        details: [
          {
            text: "Wall Putty",
            description: " - Asian wall putty of 2 coats for internal walls",
          },
          {
            text: "Internal walls",
            description: " - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats",
          },
          {
            text: "External walls",
            description: " - Asian External primer of 1 coat and Asian Apex paint of 2 coats",
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
            description: " - GM or Lisa brand",
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
            description: " - 1,500 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
          },
        ],
      },
      {
        category: "Fabrication",
        details: [
          {
            text: "Fabrication",
            description: " - SS Staircase Railing of the price up to ₹700/SFT",
          },
        ],
      },
    ],
  },
  {
    name: "Premium Package",
    price: "₹2,200/sq.ft",
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
            description: " - Standard concrete blocks",
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
            description: " - Tiles of price up to ₹120/SFT",
          },
          {
            text: "Balcony & Open areas",
            description: " - Anti skid tiles of value up to ₹60/sq.ft",
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
            text: "Wall cladding up to a height of 7 feet",
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
            description: " - 6\"X4\" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹60,000",
          },
          {
            text: "Pooja Room",
            description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹40,000",
          },
          {
            text: "Internal Doors",
            description: " - 5\"X3\" Neem wood frame and solid flush door of price up to ₹20,000",
          },
          {
            text: "Toilet Doors",
            description: " - PVC doors of price up to ₹6,000",
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
            description: " - Asian wall putty of 2 coats for internal walls",
          },
          {
            text: "Internal walls",
            description: " - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats",
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
            description: " - Anchor or Roma brand",
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
            description: " - SS Staircase Railing With Glass of the price up to ₹1000/sq.ft",
          },
        ],
      },
    ],
  },
]

const ConcreteBlocks = () => {
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

  const handleFeatureToggle = (index) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <div className="concrete-blocks-packages">
      <h1>Residential Building Package (Concrete Blocks)</h1>
      <div className="concrete-blocks-packages-container">
        {concretePackagesData.map((packageItem, packageIndex) => (
          <div key={packageIndex} className="concrete-blocks-package">
            <div className="concrete-blocks-package-header">
              <h2>{packageItem.name}</h2>
              <p>{packageItem.price}</p>
            </div>
            {packageIndex === 0 && (
              <div className="concrete-blocks-package-details">
                {packageItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div className="concrete-blocks-feature-header" onClick={() => handleFeatureToggle(featureIndex)}>
                      <h3>{feature.category}</h3>
                      <span>{openFeatureIndex === featureIndex ? '−' : '+'}</span>
                    </div>
                    {openFeatureIndex === featureIndex && (
                      <div className="concrete-blocks-feature-details">
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
              <div className="concrete-blocks-package-details">
                {packageItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div className="concrete-blocks-feature-header" onClick={() => handleFeatureToggle(featureIndex)}>
                      <h3>{feature.category}</h3>
                      <span>{openFeatureIndex === featureIndex ? '−' : '+'}</span>
                    </div>
                    {openFeatureIndex === featureIndex && (
                      <div className="concrete-blocks-feature-details">
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

export default ConcreteBlocks;
