/*
 * Neighborhood Culinary Alliance — shared site content
 * ----------------------------------------------------
 * All three demo designs read from this one file, so copy edits
 * (and the Boys & Baking content when the client sends it) only
 * need to be made here.
 *
 * Sources:
 *   neighborhoodculinaryalliance.com  (kept site)
 *   themixingbowlincubator.org        (merged in as "Baking Incubator")
 */
window.NCA = {
  org: {
    name: "Neighborhood Culinary Alliance",
    short: "NCA",
    email: "Aprilnrichardson@gmail.com",
    phone: "240-417-5259",
    phoneHref: "tel:+12404175259",
    logo: "../assets/nca-logo.png",
    year: new Date().getFullYear()
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Our Projects" },
    { id: "incubator", label: "Baking Incubator" },
    { id: "boys-baking", label: "Boys & Baking" },
    { id: "board", label: "Board of Directors" },
    { id: "connect", label: "Connect" }
  ],

  /* ---------------- HOME ---------------- */
  home: {
    eyebrow: "Get to know us",
    title: "About Our Company",
    mission:
      "Neighborhood Culinary Alliance’s (NCA) mission is to develop and enhance real estate projects that are centered around the food and retail industries. We do this by developing projects, curating concepts and events; creating jobs, providing training, fundraising, consulting, and partnering with culinary artists, developers, landlords, food retailers, governments, corporations, and those who have a desire to elevate the food and retail industry, with an emphasis on disenfranchised people and communities.",
    paragraphs: [
      "Our Executive Director, April N. Richardson Esq. is sought after by Restaurateurs, Developers, Community Organizations, Government Agencies, and Culinary Creatives to bring culinary projects to life.",
      "Her experience as a two-decade Business and Real Estate Attorney coupled with 15 years as a Food Entrepreneur, gives her credibility in the market. Ms. Richardson owns two commercial bakeries, DC Sweet Potato Cake and Baked in Baltimore, and she owns a baked goods manufacturing facility that produces for Starbucks, Wegmans, Safeway, Albertsons, Nordstrom, and QVC.",
      "In 2019, Ms. Richardson developed the first Black-owned food hall in the nation, just steps from Washington, DC. After completing the project and being instrumental in developing seven new restaurant brands, she began to assist developers and municipalities with creating food halls and food concepts in their communities."
    ],
    cta: "Contact Ms. Richardson to learn more!",
    banner: { line1: "Start your next project", line2: "with us!", button: "Connect with us" },
    stats: [
      { n: "20+", l: "years in business & real estate law" },
      { n: "15", l: "years as a food entrepreneur" },
      { n: "2019", l: "first Black-owned food hall in the nation" },
      { n: "7", l: "restaurant brands developed" }
    ],
    heroImage: "../assets/hero.jpg"
  },

  /* ---------------- PROJECTS ---------------- */
  projects: [
    {
      id: "savor",
      kicker: "Let the journey begin",
      name: "Savor Food Hall",
      image: "../assets/savor.jpg",
      facts: ["8,700 sq. ft.", "7 vendors", "Prince George’s County, MD"],
      text:
        "Prince George’s County’s first Black Woman-owned food hall. Savor Food Hall was delivered as a cold shell. It was transformed into an 8,700 sq. ft. food hall with 7 diverse vendors including a cocktail bar, 4 food vendors, a bakery, a gourmet mini grocery store, and a retail store.",
      gallery: ["savor-s1", "savor-2-100", "savor-2_1-100", "savor-2_3-100", "savor-2_4-100", "savor-2_5-100", "savor-5-100", "savor-5_1-100", "savor-5_2-100", "savor-8_1-100", "savor-8_2-100", "savor-8_3-100", "savor-8_4-100", "savor-8_5-100"]
    },
    {
      id: "mill",
      kicker: "Let the journey begin",
      name: "The Mill on North",
      image: "../assets/mill.jpg",
      facts: ["7,500 sq. ft.", "7 vendors + central bar", "West Baltimore"],
      text:
        "The Mill on North is a 7,500 sq. ft. food hall that will feature 7 vendors including a central bar. The vendors are mostly Black women that have a direct connection to the Westside of Baltimore.",
      gallery: ["mill-1-100", "mill-1_1-100", "mill-1_2-100", "mill-1_3-100"]
    },
    {
      id: "dcspc",
      kicker: "Ninety Ten by",
      name: "DC Sweet Potato Cake",
      image: "../assets/other.jpg",
      facts: ["Bakery café", "Downtown DC", "Entrepreneurship & arts hub"],
      text:
        "Located in DC’s downtown area, Ninety Ten is a bakery café that also serves as a hub for entrepreneurship and arts events — and home to the famous DC Sweet Potato Cake.",
      gallery: ["dcspc-4", "dcspc-5", "dcspc-6", "dcspc-7", "dcspc-8", "dcspc-10", "dcspc-11", "dcspc-12", "dcspc-13", "dcspc-14", "dcspc-15"]
    }
  ],
  ongoing: [
    {
      n: "01",
      name: "The Upton Mansion",
      text: "The Upton Mansion is one of Maryland’s oldest buildings. The 15,000 sq. ft. building will be transformed into a food and market hall."
    },
    {
      n: "02",
      name: "Bronzeville, Chicago",
      text: "Ms. Richardson joined the Millhouse Construction team to develop a plot of land in Bronzeville, a historic African American arts district that borders the City of Chicago."
    },
    {
      n: "03",
      name: "Baltimore’s Harborplace",
      text: "The 2-year program is designed to jumpstart activities at Harborplace by providing economic opportunities for entrepreneurs to thrive. Vendors consist of food, beverage, music and art."
    }
  ],
  partnerLogos: [
    "dcspc-logo-diff2-300x295.png", "binb-new-logo-1-1024x1024.jpg", "9010-FINAL-768x539.png",
    "MillonNorth-logo-stacked-magentaRGB-300x243.png", "SavorFinal-01-1024x655.jpeg", "1921-LOGO-300x300.jpg",
    "DB-LOGO-DRAFT2-e1682825422102.jpg", "joe-clair-final-logo.jpg", "a-logo-2-3-1024x1024.png",
    "curated.png", "UC-logo.jpeg", "lMtaco-1024x968.png"
  ],

  /* ---------------- BAKING INCUBATOR (from themixingbowlincubator.org) ---------------- */
  incubator: {
    name: "The Mixing Bowl Incubator",
    logo: "../assets/mb-logo.png",
    heroImage: "../assets/mb-hero.jpg",
    headline: "Baltimore’s Hub for Baking Entrepreneurs.",
    sub: "Built for Bakers. Designed for Growth.",
    mission:
      "At The Mixing Bowl, we strive to empower bakery entrepreneurs to transform their ideas into scalable, compliant, and sustainable businesses.",
    tagline: "BUILD. BAKE. SCALE.",
    taglineSub: "Launch and grow your bakery business in a GMP-Certified Kitchen.",
    pitchTitle: "You’ve Got Demand. We’ve Got Capacity.",
    pitchSub: "A production-ready commercial bakery built for bakeries ready to scale into wholesale, grocery, and institutional markets.",
    highlights: [
      "5,000 sq. ft. Commercial Bakery",
      "Fully Licensed & GMP-Compliant",
      "Kosher Certification (In Progress)",
      "Northwest Baltimore"
    ],
    aboutTitle: "Built for Bakeries Ready to Grow",
    about: [
      "The Mixing Bowl is a dedicated production space for bakers that have outgrown generic shared kitchens or their home kitchens. If you’re ready to scale your bakery into wholesale, grocery, or retail, this is your next move because we have the space and equipment for you. The Mixing Bowl is the first of its kind BAKERY ONLY shared commercial kitchen in the United States and it’s based in Baltimore, MD.",
      "Created by bakery entrepreneur April N. Richardson Esq., The Mixing Bowl was developed from a desire to increase manufacturing in Maryland — and what sweeter way to do so than with baked goods. The goal is to increase the number of entrepreneurs scaling right here in the State of Maryland. Our non-profit, Neighborhood Culinary Alliance Inc., is excited to bring this much-needed space to life."
    ],
    whatWeHave: [
      "5,000 sq. ft. production-ready bakery facility",
      "Fully licensed, GMP-compliant space",
      "Kosher certification underway",
      "Designed for emerging bakery brands",
      "Located in Northwest Baltimore"
    ],
    builtFor: {
      expanding: ["Grocery & retail", "Foodservice & institutions", "Wholesale & bulk orders"],
      need: ["Certified production space", "Commercial bakery equipment", "Capacity for large orders", "Retail buyer compliance"]
    },
    why: [
      { t: "No Cross-Contamination", d: "Dedicated bakery-only facility." },
      { t: "Grocery Shelf–Ready", d: "Built for audits and retail standards." },
      { t: "Distribution Support", d: "Connections to buyers and wholesalers." },
      { t: "Serious Infrastructure", d: "Cold storage and scale-ready equipment." }
    ],
    equipment: [
      "Rack oven & revolving oven",
      "Donut maker",
      "180-qt, 80-qt, and 60-qt mixers",
      "Dough sheet roller",
      "Automatic depositor",
      "Cookie portioner",
      "Full-size convection oven",
      "Proofer",
      "3-compartment sink & hand sink",
      "Walk-in freezers and walk-in coolers",
      "Stainless steel prep tables",
      "Chrome 14x26 5-shelf units",
      "Ingredient bins, smallwares, trays, and more"
    ],
    membershipIntro:
      "Flexible membership options designed to support bakeries at every stage — from small batch production to full-scale wholesale operations.",
    memberships: [
      {
        name: "Sugar Membership", price: "$1,000", per: "/ month", meta: "40 Hours · One Employee",
        items: ["1 dry storage shelf", "Shared shelf in walk-in refrigerator or freezer", "Utilities billed at $1.00/hr"]
      },
      {
        name: "Spice Membership", price: "$2,000", per: "/ month", meta: "80 Hours · Two Employees",
        items: ["2 dry storage shelves", "1 shelf in walk-in freezer", "1 shelf in walk-in refrigerator", "Utilities billed at $1.00/hr"]
      },
      {
        name: "Everything Nice Membership", price: "$3,800", per: "/ month", meta: "160 Hours · Three Employees", featured: true,
        items: ["Dedicated 4-shelf dry storage rack", "3 shelves in freezer", "2 shelves in walk-in refrigerator", "Dedicated prep table for your company", "Utilities billed at $1.00/hr"]
      },
      {
        name: "Nighttime Scaler", price: "$6,000", per: "/ month", meta: "240 Hours · 6:00pm – 5:00am · Five Employees",
        items: ["Dedicated 2 dry storage racks", "Dedicated freezer", "Upright refrigerator", "Utilities billed at $1.00/hr"]
      },
      {
        name: "Daily Kitchen Access", price: "$38", per: "/ hour", meta: "No Commitment · One Person",
        items: ["No storage included", "Ideal for short-term or overflow needs"]
      }
    ],
    partnersIntro:
      "The Mixing Bowl was just an idea seeded, and these partners made sure that it went from seed to harvest and we are truly grateful. A huge thank you to:",
    partners: [
      "The Abell Foundation Inc.",
      "The Whiting-Turner Contracting Company",
      "J. “Tim” Regan",
      "DIRTY GIRL Legal",
      "Baked In Baltimore",
      "Home Depot"
    ],
    cta: { title: "Ready to Join The Mixing Bowl?", sub: "Apply today and start producing in a certified, scale-ready bakery." },
    /* Two different Google Forms are used on the current incubator site.
       applyUrl = "Apply for Membership" (membership page + home "Find Out More")
       tourUrl  = "Book a Facility Tour" / "Apply Now" (about page)
       Confirm with the client which one should be the single application. */
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSde57v4cUTqgtgpeMdYCeJfVrYYOKh74FiTT9julvdXcq_iXw/viewform",
    tourUrl: "https://docs.google.com/forms/d/1gNQ6UYRyW694tB9A8-GbiwXLjFesd0vZP3hvrohTf1Q/viewform",
    contact: {
      address: "6848 Reisterstown Rd, Baltimore, MD 21215",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=6848+Reisterstown+Rd+Baltimore+MD+21215",
      email: "admin@bakeryoperations.com",
      hours: "Open daily · 9:00 AM – 5:00 PM"
    }
  },

  /* ---------------- BOYS & BAKING ----------------
   * PLACEHOLDER — the client will supply this content.
   * Set `pending: false` once real copy is in, and the
   * "content coming soon" flags disappear in all three demos.
   */
  boysBaking: {
    pending: true,
    title: "Boys & Baking",
    tagline: "[Program tagline — to come from client]",
    intro:
      "[Program overview — a short paragraph describing what Boys & Baking is, who runs it, and why it matters. Client to provide.]",
    sections: [
      { t: "About the Program", d: "[Mission and history of Boys & Baking.]" },
      { t: "What Participants Learn", d: "[Skills, curriculum, or session topics.]" },
      { t: "Who It’s For", d: "[Ages, eligibility, neighborhoods served.]" },
      { t: "Get Involved", d: "[How to enroll, volunteer, donate or sponsor.]" }
    ],
    details: [
      { k: "Schedule", v: "[Days / times]" },
      { k: "Location", v: "[Location]" },
      { k: "Ages", v: "[Age range]" },
      { k: "Cost", v: "[Cost / free]" }
    ],
    ctaLabel: "Get Involved",
    image: "../assets/bb-placeholder.jpg"   // stock placeholder — swap for a real program photo
  },

  /* ---------------- BOARD ---------------- */
  board: [
    { name: "April N. Richardson", role: "Executive Director", bio: ["April brings 20 years as a Business and Real Estate Lawyer and 15 years as a baked goods manufacturer. Her blend of legal, real estate, and the food industry allows for a broad understanding of how to lead NCA."] },
    { name: "Emerick Peace", bio: ["Mr. Peace is a 30-year real estate veteran and Baltimorean. He owns the largest real estate brokerage in the State of Maryland with over 650 agents. His commitment to community service is unsurpassed. Serving as the former President of 100 Black Men and mentoring hundreds of business owners, he is a welcomed addition to NCA."] },
    { name: "Darnell Sutton", bio: ["Darnell brings forth his many talents and vast experience as a veteran of music recording, television production and broadcasting, sports and music celebrity management, and film distribution.", "Darnell has worked with some of the greatest athletes and entertainers of our time, including the “King of Pop” Michael Jackson, boxing champions Mike Tyson and Floyd Mayweather, tennis star Serena Williams, and the incomparable multiple Grammy award-winning performers Patti LaBelle, Roberta Flack, and MC Hammer — just to name a few."] },
    { name: "Darnisha “DD” Dorsey", bio: ["DD’s background in food science made her a natural fit for our board. Her expertise in food safety, HACCP, GMP, and SQF is beneficial to the food industry that our organization serves."] },
    { name: "Bianca Tabbs", bio: ["Bianca Renee is a seasoned professional with over a decade of experience in event planning and digital marketing. With a diverse background spanning industries like community advocacy, entrepreneurship, real estate, and hospitality, her strategic marketing expertise drives brand visibility and engagement."] },
    { name: "Maresha “MJ” Johnson", bio: ["MJ is a twenty-year hospitality veteran. The majority of her career was working with some of the most notable hotel brands in the Washington DC region. MJ is a highly sought-after event planner and curator. Known for her signature events and fundraising, she is a fantastic board choice."] }
  ]
};
