/*
 * The Private Practice Law Group — shared site content
 * ----------------------------------------------------
 * All three demo designs read from this file.
 * Source: theprivatepracticelawfirm.com (live, 2021 copy), lightly edited
 * for grammar/duplicates. Items in [brackets] need client input.
 */
window.PPLG = {
  firm: {
    name: "The Private Practice Law Group",
    short: "Private Practice Law Group",
    legal: "The Private Practice Law Group LLC",
    sister: "Push Pull Consulting",
    attorney: "April N. Richardson, Esq.",
    logoLight: "../assets/pplg-site.png",   // black + lime, for light backgrounds
    logoDark: "../assets/pplg-png2.png",    // white + lime, for dark backgrounds
    // The live site lists no phone, email or address. Fill these in, then set pending:false.
    contact: {
      pending: true,
      phone: "[Firm phone]",
      phoneHref: "#/contact",
      email: "[Firm email]",
      emailHref: "#/contact",
      location: "Serving the Washington, DC / Maryland region",
      hours: "[Office hours]"
    },
    year: new Date().getFullYear()
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Legal Services" },
    { id: "consulting", label: "Push Pull Consulting" },
    { id: "book", label: "Book a Session" },
    { id: "contact", label: "Contact" }
  ],

  home: {
    taglines: ["Business law.", "Real estate law.", "Food law."],
    lead: "A law firm built for entrepreneurs, with a unique blend of legal counsel and business consulting.",
    notButtonUp:
      "If you are looking for a “button up” type of attorney, then we are not the firm for you. Our attorneys are smart as hell, creative, high energy, spirited, and simply great to be around.",
    pillars: [
      { t: "We speak entrepreneur", d: "No lawyer code. You get relatable Entrepreneur Attorneys who run multiple businesses of their own." },
      { t: "Law + business, together", d: "Legal services through the firm, business consulting through our sister company, Push Pull Consulting." },
      { t: "Outside the box", d: "Counsel for clients who push the envelope creatively, while protecting their companies, concepts and ideas." }
    ],
    insight:
      "Most entrepreneurs and business owners mistakenly believe that they need legal help, when they actually need business advice. Let us help you figure out your needs."
  },

  about: {
    title: "About Us",
    paragraphs: [
      "Welcome to The Private Practice Law Group LLC and our sister company, Push Pull Consulting. We are a business, real estate, and food law firm with a unique blend of law and business consulting. If you are looking for a “button up” type of attorney, then we are not the firm for you. Our attorneys are smart as hell, creative, high energy, spirited, and simply great to be around.",
      "This firm is inspired by entrepreneurs, because we understand you the most. We do not speak in lawyer code. Instead, you get a relatable staff of Entrepreneur Attorneys who know about being in business, because we have multiple businesses of our own. Our blend of legal and non-legal services is designed to give you the best option to meet your growth needs.",
      "Our legal services include real estate, business, and food/restaurant law. Our non-legal business services, under Push Pull, include business consulting, strategic development, marketing, branding, brokerage, and finance sourcing.",
      "We pride ourselves on being an “outside the box” law firm, in that we provide counsel to clients who push the envelope creatively while protecting their company, concepts, and ideas."
    ],
    // Bio drawn from April's public bio on neighborhoodculinaryalliance.com — client to confirm.
    attorney: {
      name: "April N. Richardson, Esq.",
      role: "Founding Attorney",
      photo: "../assets/april.jpg",
      bio: [
        "April brings two decades of experience as a business and real estate attorney, coupled with 15 years as a food entrepreneur.",
        "She owns two commercial bakeries, DC Sweet Potato Cake and Baked in Baltimore, and a baked goods manufacturing facility that produces for national retailers. In 2019 she developed the first Black-owned food hall in the nation, just steps from Washington, DC.",
        "That first-hand experience is why her clients get an attorney who has been in their shoes."
      ],
      stats: [
        { n: "20+", l: "years practicing business & real estate law" },
        { n: "15", l: "years as a food entrepreneur" },
        { n: "2019", l: "developed the nation’s first Black-owned food hall" }
      ]
    }
  },

  services: [
    {
      id: "business",
      name: "Business Law",
      short: "From a raw idea to a fully operational company, and every agreement in between.",
      intro:
        "The practice of business law covers a wide range, from the emergence of a raw business idea to a fully operational company. We offer a full range of business law services, from entity selection and company formation to partnership and employee agreements, to dissolving and selling companies. No business legal matter is too small for us.",
      items: [
        "Business formation", "Reorganization and restructure", "Sale of assets and shares", "Succession planning",
        "Employee and independent contractor relationships", "Trade name and trademark",
        "Partnership, joint venture and shareholder agreements", "Operating agreements",
        "Non-compete and non-disclosure agreements", "Draft and review contracts", "Regulatory and compliance matters",
        "Review and incorporate hiring practices", "Settlement agreements", "Business franchise development",
        "Employee handbooks", "Develop corporate practice", "Strategic redirection"
      ]
    },
    {
      id: "real-estate",
      name: "Real Estate Law",
      short: "Acquisitions, leases and the documents that protect your interest in property.",
      intro:
        "Whether you are acquiring a building, negotiating a commercial lease, or protecting your rights in a property, we guide you through every document and deadline.",
      items: [
        "Acquisitions, sales, and transfers of real property", "Commercial lease negotiations",
        "Protection of rights and interests in real estate", "Creation of real estate documents",
        "Real estate contract review and drafting", "Settlement document review"
      ]
    },
    {
      id: "food",
      name: "Food & Restaurant Law",
      short: "Counsel from attorneys who run food businesses themselves.",
      intro:
        "Our attorneys own and operate food businesses, from commercial bakeries to food halls. We advise on everything from product development to site selection and staffing.",
      items: [
        "Assist with food product development", "Broker food products into markets", "Site selection for new concepts",
        "Evaluate restaurant ideas and concepts", "Consult on food hall projects", "Review employee retention policies",
        "Develop employee handbooks"
      ]
    }
  ],

  pushPull: {
    name: "Push Pull Business Consulting",
    intro:
      "Our consulting services help you strengthen your business with innovative and practical solutions that deliver tangible benefits and real results.",
    headline: "Let’s Grow Your Business!",
    items: [
      "Review the health of the company", "Refine business plans", "Marketing and branding", "Website development",
      "Identify sources of capital", "Develop strategies to support growth and profitability", "Business turnaround strategies",
      "General business solutions", "Serve as business mentor", "Act as quasi-business partner", "Expand business ideas",
      "Assist with new contracts", "Provide leadership and employee training"
    ]
  },

  sessions: [
    { id: "hear-me-out", name: "Hear Me Out", q: "I have an idea and I want someone to hear it.", price: 250 },
    { id: "lets-go", name: "Let’s Go", q: "I’m ready to start my company.", price: 250 },
    { id: "set-up-correctly", name: "Is My Business Set Up Correctly?", q: "What are the steps to correct this issue?", price: 250 },
    { id: "sweet-potato-pie", name: "Sweet Potato Pie", q: "My pie is the best, but how do I get into grocery?", price: 275 },
    { id: "h8-employees", name: "H8 Employees", q: "Employee practices aren’t working?", price: 300 },
    { id: "help-im-stuck", name: "Help, I’m Stuck", q: "My business isn’t growing and I need some guidance.", price: 350 },
    { id: "everything-is-a-mess", name: "Everything Is A Mess!", q: "How do I fix it?", price: 350 },
    { id: "what-in-the-hell", name: "What In The Hell Plan", q: "I have a business and I have no idea what I’m doing anymore.", price: 350 },
    { id: "im-done", name: "I’m Done", q: "I’m thinking about closing shop. Where do I start?", price: 350 }
  ],
  sessionNote: "All consulting sessions are 1 hour.",

  // Client logos shown on the live site under "They Trust Us".
  // (Template sample logos on the live site — Carbon, Goovi, Monstra, etc. — were removed.)
  clientLogos: [
    "SavorFinal-01.jpeg", "DCSPC-Logo-Final-1.png", "DCSP-bmore-final1.png", "MillonNorth-logo-stacked-magentaRGB.png",
    "Hollywall_Logo_1204x200.png", "copy-Relish-Market-Logo.png", "1921-logo.png", "DB-LOGO-DRAFT2.png",
    "lMtaco.png", "RESTBG-LOGO-Recovered.png", "UC-logo.jpeg", "curated.png", "CP-logo-2.png"
  ],

  disclaimer:
    "The information on this website is for general information purposes only and is not legal advice. Contacting the firm does not create an attorney-client relationship. Consulting sessions offered through Push Pull Consulting are business consulting, not legal representation."
};
