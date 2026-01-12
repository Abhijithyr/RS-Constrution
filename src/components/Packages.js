import "./Packages.css";
import { useState, useRef  } from 'react';
import { Helmet } from "react-helmet-async";
import packages from "../components/Images/ourpackages.png";
// import Costestimator from "../components/Images/Costestimator.png";
import packagelogo1 from "../components/Images/Packagelogo1.png";
import packagelogo2 from "../components/Images/Packagelogo2.png";
import packagelogo3 from "../components/Images/Packagelogo3.png";
import packagelogo4 from "../components/Images/Packagelogo4.png"; 
// import packagelogo5 from "../components/Images/Packagelogo5.png"; 
// import packagelogo6 from "../components/Images/Packagelogo6.png"; 
// import packagelogo7 from "../components/Images/Packagelogo7.png"; 
// import packagelogo8 from "../components/Images/Packagelogo8.png"; 
// import packagelogo9 from "../components/Images/Packagelogo9.png"; 
// import packagelogo10 from "../components/Images/Packagelogo10.png"; 


const packagesData = [
  {
    id: "basic",
    name: "Basic Package",
    price: "Rs.1850/*-Sq Ft",
    image: packagelogo1,
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "Rs.2000/*-Sq Ft",
    image: packagelogo2,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "Rs.2200/*-Sq Ft",
    image: packagelogo3,
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: "Rs.2500/*-Sq Ft",
    image: packagelogo4,
  },
  // {
  //   id: 19,
  //   name: "Luxury +",
  //   price: "Rs.2450/*-Sq Ft",
  //   image: packagelogo5,
  // },
  // {
  //   id: 20,
  //   name: "Freedom",
  //   price: "Rs.2160/*-Sq Ft",
  //   image: packagelogo6,
  // },
  // {
  //   id: 21,
  //   name: "Freedom +",
  //   price: "Rs.2250/*-Sq Ft",
  //   image: packagelogo7,
  // },
  // {
  //   id: 22,
  //   name: "The One +",
  //   price: "Rs.2999/*-Sq Ft",
  //   image: packagelogo8,
  // },
  // {
  //   id: 23,
  //   name: "Ecofriendly",
  //   price: "Rs.1860/*-Sq Ft",
  //   image: packagelogo9,
  // },
  // {
  //   id: 24,
  //   name: "Ecofriendly +",
  //   price: "Rs.1950/*-Sq Ft",
  //   image: packagelogo10,
  // },
];

const concretePackagesData = [
  {
    id: "basic",
    packagename: "Residential Building Package (Concrete Blocks)",
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
    id: "standard",
    packagename: "Residential Building Package (Concrete Blocks)",
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
    id: "premium",
    packagename: "Residential Building Package (Concrete Blocks)",
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
  // {
  //     packagename: "Residential Building Package (Red Clay Bricks)",
  //     name: "Basic Package",
  //     price: "₹2,000/sq.ft",
  //     features: [
  //       {
  //         category: "Core Construction Materials",
  //         details: [
  //           {
  //             text: "Cement",
  //             description: " - Ramco, Zuari, Priya or equivalent",
  //           },
  //           {
  //             text: "Steel",
  //             description: " - A1 Gold",
  //           },
  //           {
  //             text: "Blocks",
  //             description: " - Standard red clay bricks",
  //           },
  //           {
  //             text: "Sand",
  //             description: " - M-sand (single wash for all works) P-sand (double wash for plastering)",
  //           },
  //           {
  //             text: "Aggregates",
  //             description: " - 20mm & 40mm",
  //           },
  //           {
  //             text: "Sump",
  //             description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 5,000 liters.",
  //           },
  //           {
  //             text: "Clear floor height",
  //             description: " - 10 feet.",
  //           },
  //           {
  //             text: "Waterproofing",
  //             description: " - Dr Fixit waterproofing for the terrace",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Flooring",
  //         details: [
  //           {
  //             text: "Living, Dining, Rooms & Kitchen",
  //             description: " - Tiles of price up to ₹50/SFT",
  //           },
  //           {
  //             text: "Balcony & Open areas",
  //             description: " - Anti skid tiles of value up to ₹40/sq.ft",
  //           },
  //           {
  //             text: "Staircase",
  //             description: " - Granite of price up to ₹100/sq.ft",
  //           },
  //           {
  //             text: "Parking",
  //             description: " - Tiles of price up to ₹40/sq.ft",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Kitchen",
  //         details: [
  //           {
  //             text: "Wall cladding up to a height of 3 feet above kitchen slab",
  //             description: " - Ceramic tiles of size 18\"X12\" of price up to ₹50/sq.ft",
  //           },
  //           {
  //             text: "Sink",
  //             description: " - Steel sink of price up to ₹5,000/sq.ft",
  //           },
  //           {
  //             text: "Kitchen counter",
  //             description: " - 30mm thick slab of price up to ₹150/sq.ft",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Bathroom",
  //         details: [
  //           {
  //             text: "Wall cladding up to a height of 7 feet",
  //             description: " - Ceramic tiles of price ₹50/sq.ft",
  //           },
  //           {
  //             text: "Sanitary ware & CP fittings",
  //             description: " - Total budget for toilets ₹30,000 inclusive of GST of brand Hindware or Parryware",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Doors & Windows",
  //         details: [
  //           {
  //             text: "Main door",
  //             description: " - 6\"X4\" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹30,000",
  //           },
  //           {
  //             text: "Pooja Room",
  //             description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹12,000",
  //           },
  //           {
  //             text: "Internal Doors",
  //             description: " - 5\"X3\" Neem wood frame and solid flush door of price up to ₹10,000",
  //           },
  //           {
  //             text: "Toilet Doors",
  //             description: " - PVC doors of price up to ₹3,000",
  //           },
  //           {
  //             text: "Windows",
  //             description: " - Aluminium",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Painting",
  //         details: [
  //           {
  //             text: "Wall Putty",
  //             description: " - Asian wall putty of 2 coats for internal walls",
  //           },
  //           {
  //             text: "Internal walls",
  //             description: " - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats",
  //           },
  //           {
  //             text: "External walls",
  //             description: " - Asian External primer of 1 coat and Asian Apex paint of 2 coats",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Electrical",
  //         details: [
  //           {
  //             text: "Conduits",
  //             description: " - ISI make pipes",
  //           },
  //           {
  //             text: "Wires",
  //             description: " - Finolex, or Equivalent Brand",
  //           },
  //           {
  //             text: "Switches",
  //             description: " - Hi-Fi brand",
  //           },
  //           {
  //             text: "MCB",
  //             description: " - IndoAsian",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Plumbing",
  //         details: [
  //           {
  //             text: "Pipes",
  //             description: " - CPVC and PVC pipes of brand Supreme or Ashirwad",
  //           },
  //           {
  //             text: "Overhead tank",
  //             description: " - 1,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
  //           },
  //         ],
  //       },
  //       {
  //         category: "Fabrication",
  //         details: [
  //           {
  //             text: "Fabrication",
  //             description: " - MS Staircase Railing of the price up to ₹120/SFT",
  //           },
  //         ],
  //       },
  //     ],
  //   },
    // {
    //   packagename: "Residential Building Package (Red Clay Bricks)",
    //   name: "Standard Package",
    //   price: "₹2,200/sq.ft",
    //   features: [
    //     {
    //       category: "Core Construction Materials",
    //       details: [
    //         {
    //           text: "Cement",
    //           description: " - UltraTech, Birla A1 or equivalent",
    //         },
    //         {
    //           text: "Steel",
    //           description: " - SK or Sunvik",
    //         },
    //         {
    //           text: "Blocks",
    //           description: " - Standard red clay bricks",
    //         },
    //         {
    //           text: "Sand",
    //           description: " - M-sand (single wash for all works) P-sand (double wash for plastering)",
    //         },
    //         {
    //           text: "Aggregates",
    //           description: " - 20mm & 40mm",
    //         },
    //         {
    //           text: "Sump",
    //           description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 8,000 liters.",
    //         },
    //         {
    //           text: "Clear floor height",
    //           description: " - 10 feet.",
    //         },
    //         {
    //           text: "Waterproofing",
    //           description: " - Dr Fixit waterproofing for the terrace",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Flooring",
    //       details: [
    //         {
    //           text: "Living, Dining, Rooms & Kitchen",
    //           description: " - Tiles of price up to ₹70/SFT",
    //         },
    //         {
    //           text: "Balcony & Open areas",
    //           description: " - Anti skid tiles of value up to ₹50/sq.ft",
    //         },
    //         {
    //           text: "Staircase",
    //           description: " - Granite of price up to ₹120/sq.ft",
    //         },
    //         {
    //           text: "Parking",
    //           description: " - Tiles of price up to ₹50/sq.ft",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Kitchen",
    //       details: [
    //         {
    //           text: "Wall cladding up to a height of 3 feet above kitchen slab",
    //           description: " - Ceramic tiles of size 18\"X12\" of price up to ₹70/sq.ft",
    //         },
    //         {
    //           text: "Sink",
    //           description: " - Fiber sink of price up to ₹6,500/sq.ft",
    //         },
    //         {
    //           text: "Kitchen counter",
    //           description: " - 30mm thick slab of price up to ₹180/sq.ft",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Bathroom",
    //       details: [
    //         {
    //           text: "Wall cladding up to a height of 7 feet",
    //           description: " - Ceramic tiles of price ₹60/sq.ft",
    //         },
    //         {
    //           text: "Sanitary ware & CP fittings",
    //           description: " - Total budget for toilets ₹30,000 inclusive of GST of brand Cera or Varmora",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Doors & Windows",
    //       details: [
    //         {
    //           text: "Main door",
    //           description: " - 6\"X4\" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹40,000",
    //         },
    //         {
    //           text: "Pooja Room",
    //           description: " - 5\"X3\" Teak wood frame and solid flush door of price up to ₹20,000",
    //         },
    //         {
    //           text: "Internal Doors",
    //           description: " - 5\"X3\" Neem wood frame and solid flush door of price up to ₹10,000",
    //         },
    //         {
    //           text: "Toilet Doors",
    //           description: " - WPC doors of price up to ₹5,000",
    //         },
    //         {
    //           text: "Windows",
    //           description: " - UPVC or Neem wood",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Painting",
    //       details: [
    //         {
    //           text: "Wall Putty",
    //           description: " - Asian wall putty of 2 coats for internal walls",
    //         },
    //         {
    //           text: "Internal walls",
    //           description: " - Asian internal primer of 1 coat and Premium Emulsion of 2 coats",
    //         },
    //         {
    //           text: "External walls",
    //           description: " - Asian External primer of 1 coat and Asian Apex paint of 2 coats",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Electrical",
    //       details: [
    //         {
    //           text: "Conduits",
    //           description: " - ISI make pipes",
    //         },
    //         {
    //           text: "Wires",
    //           description: " - Finolex, or Equivalent Brand",
    //         },
    //         {
    //           text: "Switches",
    //           description: " - GM or Lisa brand",
    //         },
    //         {
    //           text: "MCB",
    //           description: " - IndoAsian",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Plumbing",
    //       details: [
    //         {
    //           text: "Pipes",
    //           description: " - CPVC and PVC pipes of brand Supreme or Ashirwad",
    //         },
    //         {
    //           text: "Overhead tank",
    //           description: " - 1,500 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Fabrication",
    //       details: [
    //         {
    //           text: "Fabrication",
    //           description: " - SS Staircase Railing of the price up to ₹700/SFT",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   packagename: "Residential Building Package (Red Clay Bricks)",
    //   name: "Premium Package",
    //   price: "₹2,400/sq.ft",
    //   features: [
    //     {
    //       category: "Core Construction Materials",
    //       details: [
    //         {
    //           text: "Cement",
    //           description: " - UltraTech Super or Birla Super",
    //         },
    //         {
    //           text: "Steel",
    //           description: " - Indus, Jindal or JSW",
    //         },
    //         {
    //           text: "Blocks",
    //           description: " - Standard red clay bricks",
    //         },
    //         {
    //           text: "Sand",
    //           description: " - M-sand (single wash for all works) P-sand (double wash for plastering)",
    //         },
    //         {
    //           text: "Aggregates",
    //           description: " - 20mm & 40mm",
    //         },
    //         {
    //           text: "Sump",
    //           description: " - 6\" concrete blocks & waterproof plastered with single layer mesh with a capacity of 12,000 liters.",
    //         },
    //         {
    //           text: "Clear floor height",
    //           description: " - 10 feet.",
    //         },
    //         {
    //           text: "Waterproofing",
    //           description: " - Dr Fixit waterproofing for the terrace",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Flooring",
    //       details: [
    //         {
    //           text: "Living, Dining, Rooms & Kitchen",
    //           description: " - Tiles or granite of price up to ₹120/SFT",
    //         },
    //         {
    //           text: "Balcony & Open areas",
    //           description: " - Anti skid tiles of value up to ₹60/sq.ft",
    //         },
    //         {
    //           text: "Staircase",
    //           description: " - Granite of price up to ₹200/sq.ft",
    //         },
    //         {
    //           text: "Parking",
    //           description: " - Tiles of price up to ₹60/sq.ft",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Kitchen",
    //       details: [
    //         {
    //           text: "Wall cladding up to a height of 3 feet above kitchen slab",
    //           description: " - Ceramic tiles of size 18\"X12\" of price up to ₹100/sq.ft",
    //         },
    //         {
    //           text: "Sink",
    //           description: " - Fiber sink of price up to ₹10,000/sq.ft",
    //         },
    //         {
    //           text: "Kitchen counter",
    //           description: " - 30mm thick slab of price up to ₹250/sq.ft",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Bathroom",
    //       details: [
    //         {
    //           text: "Wall cladding up to a height of 7 feet",
    //           description: " - Ceramic tiles of price ₹70/sq.ft",
    //         },
    //         {
    //           text: "Sanitary ware & CP fittings",
    //           description: " - Total budget for toilets ₹50,000 inclusive of GST of brand Jaquar",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Doors & Windows",
    //       details: [
    //         {
    //           text: "Main door",
    //           description: " - 6\"X4\" Burma teak wood frame, shutter thickness of 32mm of price up to ₹60,000",
    //         },
    //         {
    //           text: "Pooja Room",
    //           description: " - 5\"X3\" Teak wood frame and solid flush door of price up to ₹40,000",
    //         },
    //         {
    //           text: "Internal Doors",
    //           description: " - 5\"X3\" Sal wood frame and solid flush door of price up to ₹20,000",
    //         },
    //         {
    //           text: "Toilet Doors",
    //           description: " - WPC doors of price up to ₹6,000",
    //         },
    //         {
    //           text: "Windows",
    //           description: " - Sal wood",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Painting",
    //       details: [
    //         {
    //           text: "Wall Putty",
    //           description: " - Birla wall putty of 2 coats for internal walls",
    //         },
    //         {
    //           text: "Internal walls",
    //           description: " - Asian internal primer of 1 coat and Premium Emulsion of 2 coats",
    //         },
    //         {
    //           text: "External walls",
    //           description: " - Asian External primer of 1 coat and Asian Apex Ultima paint of 2 coats",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Electrical",
    //       details: [
    //         {
    //           text: "Conduits",
    //           description: " - ISI make pipes",
    //         },
    //         {
    //           text: "Wires",
    //           description: " - Finolex, or Equivalent Brand",
    //         },
    //         {
    //           text: "Switches",
    //           description: " - Anchor or Roma brand",
    //         },
    //         {
    //           text: "MCB",
    //           description: " - IndoAsian",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Plumbing",
    //       details: [
    //         {
    //           text: "Pipes",
    //           description: " - CPVC and PVC pipes of brand Supreme or Ashirwad",
    //         },
    //         {
    //           text: "Overhead tank",
    //           description: " - 2,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required",
    //         },
    //       ],
    //     },
    //     {
    //       category: "Fabrication",
    //       details: [
    //         {
    //           text: "Fabrication",
    //           description: " - SS Staircase Railing With Glass of the price up to ₹1000/sq.ft",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      id: "luxury",
      packagename: "Villa Package",
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

const Packages = () => {
  /* === SAME STATE YOU ALREADY USE === */
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

  /* === SCROLL REFS (NO STATE CHANGE) === */
  const sectionRefs = useRef({});

  const handleFeatureToggle = (index) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  /* === SCROLL FUNCTION === */
  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 185; // adjust based on your sticky header
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };
  

  return (

    <>


    <Helmet>
            <title>Affordable Construction Packages in Bangalore | RS Construction Homes</title>
    <meta name="description" content="Explore RS Constructions’ affordable construction packages in Bangalore for residential and commercial projects. Choose from Standard, Premium, and Luxury home building packages with transparent pricing and quality assurance."/>
    <meta name="keywords" content="Construction Packages Bangalore, RS Constructions Packages, Affordable Construction Bangalore, Home Building Packages, House Construction Packages Bangalore, Construction Cost Per Sqft Bangalore, Turnkey Construction Packages, Residential Construction Packages, Commercial Construction Packages, Low Cost Construction Bangalore, Premium Construction Packages, Luxury Home Construction Bangalore, Villa Construction Packages, Construction Services Bangalore, Best Construction Company Bangalore, Building Contractors Bangalore, Transparent Pricing Construction, Home Construction Plans Bangalore"/>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="Construction Packages in Bangalore"/>
    <meta property="og:description" content="Transparent and affordable construction packages from RS Construction Homes. Find the best plan for your dream home."/>
    <meta property="og:url" content="https://rsconstruction.homes/packages"/>
    <meta property="og:type" content="website"/>
    
          </Helmet>
    

    <section className="packages-hero">
        <img src={packages} alt="Construction services" className="package-hero-image" loading="lazy"/>
        <div className="package-hero-content">
          <h1>Packages</h1>
        </div>
      </section>



    <div className="concrete-blocks-packages">


      <div className="packages-namings">
      {packagesData.map((item) => (
        <div
            key={item.id}
            className="package-details"
            onClick={() => scrollToSection(item.id)}
            style={{ cursor: "pointer" }}
          >
            <span>
              <img src={item.image} alt={item.name} />
            </span>
            <div className="package-details-name">
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          </div>
      ))}
    </div>

      {/* <div
        className="hero"
        style={{
          background: `url(${Costestimator}) no-repeat center center/cover`,
        }}
      >
        <h1 className="hero-title" data-aos="fade-up">
        Packages
        </h1>
      </div> */}
      {/* <h1>Residential Building Package (Concrete Blocks)</h1> */}
      <div className="concrete-blocks-packages-container">
        {concretePackagesData.map((packageItem, packageIndex) => (
          <div key={packageIndex} 
          ref={(el) => (sectionRefs.current[packageItem.id] = el)}
          className="concrete-blocks-package">
            <h1>{packageItem.packagename}</h1>
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
    </>
  );
};

export default Packages;
