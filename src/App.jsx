// GangaFoundationLandingPage.jsx
// Tailwind CSS with improved colorful UI

import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropdownList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-6 gap-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl h-80">

      {data.map((section, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl border p-4 flex flex-col"
           // fixed height
          style={{ height: openIndex==index?"auto":"60px",

           }}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <h3 className="font-semibold text-gray-800">{section.title}</h3>
            {openIndex === index ? (
              <FaChevronUp className="text-indigo-600" />
            ) : (
              <FaChevronDown className="text-indigo-600" />
            )}
          </div>

          {/* Scrollable dropdown area so content doesn’t overflow */}
          {openIndex === index && (
            <ul className="mt-3 space-y-2 overflow-y-auto flex-1 pr-1">
              {section.files.map((file, i) => (
                <li key={i}>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
                  >
                    <span>{file.icon}</span>
                    <span>{file.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
// export default DropdownList;


// Hero Section Component
const Hero = ({ company }) => (
  <header className="relative h-120 w-full overflow-hidden  shadow-lg">
    <img
      src="ganga/hero.jpg"
      alt="Ganga Foundation"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-black to-purple-gray" />
    <div className="absolute bottom-10 left-10 text-white">
      <h1 className="text-4xl font-extrabold drop-shadow-lg tracking-wide">
        {company.name}
      </h1>
      <p className="text-base  max-w-xl mt-2 drop-shadow-md">
        {company.registeredOffice}
      </p>
    </div>
  </header>
);

// Company Info Section
const CompanyInfo = ({ company }) => (
  <section className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow">
    <div className="flex-1 rounded-xl border bg-white p-6 shadow-md hover:shadow-lg transition">
      <h2 className="font-bold mb-3 text-xl text-indigo-700">Company Profile</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
        {company.profile}
      </p>

      <div className="mt-4">
        <h3 className="font-semibold text-purple-700">Liquidation / Legal</h3>
        <p className="text-sm mt-1 text-gray-600">{company.liquidOrder}</p>
        <p className="text-sm mt-2 whitespace-pre-line text-gray-600">
          {company.liquidator}
        </p>
      </div>
    </div>

    <aside className="w-full md:w-80 rounded-xl border p-5 bg-white shadow-md">
      <h2 className="font-bold mb-3 text-indigo-700">Quick Info</h2>
      <div className="text-sm space-y-2 text-gray-700">
        <p><strong>Name:</strong> {company.name}</p>
        <p><strong>Address:</strong> {company.registeredOffice}</p>
        <p><strong>CIN:</strong> {company.cin}</p>
      </div>
      <img
        src="ganga/company.webp"
        alt="thumbnail"
        className="mt-4 h-44 w-full object-cover rounded-lg shadow"
      />
    </aside>
  </section>
);


const Slide = () => {
  const images = [
    "ganga/1.png",
    "ganga/2.png",
    "ganga/3.png",
    "ganga/4.png",
    "ganga/5.png",
    "ganga/6.png",
    "ganga/7.png",
    "ganga/8.png",
    "ganga/9.png",
    "ganga/10.png",
    "ganga/11.png",
    "ganga/12.png",
    "ganga/13.png",
    "ganga/14.png",
    "ganga/15.png",
    "ganga/16.png",
    "ganga/17.png",
    "ganga/18.png",
    "ganga/19.png",
    "ganga/20.png",
    "ganga/21.png",
    "ganga/22.png",
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[800px] m-6 p-5 rounded-2xl overflow-hidden relative shadow-xl bg-white">
      {/* Image */}
      <img
        src={images[index]}
        alt="carousel"
        className="h-[100%] w-full object-contain transition-all duration-700"
      />

      {/* Slide Number Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
        {index + 1} / {images.length}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
      >
        <span className="text-2xl font-bold">›</span>
      </button>
    </div>
  );
};




// Who We Are Section
// Who We Are Section
const WhoWeAre = () => (
  <section className="px-6 py-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
    <h3 className="text-3xl font-bold mb-8 text-center text-indigo-700">
      Who We Are
    </h3>

    {/* PDF Content */}
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-gray-700 space-y-4 leading-relaxed">
      <p>
        <strong>GANGA FOUNDATIONS PRIVATE LIMITED</strong>, incorporated on
        October 08, 2004, is an ISO 9001:2015 certified company. Since its
        inception, the Company has come a long way as a Builder, Promoter,
        Infrastructure & Urban Development and Real Estate player.
      </p>
      <p>
        The organization was promoted by <strong>Mr. S. Senthil Kumar</strong> &
        <strong> Mr. C. Chitti Babu</strong>. Over a period of time, they have
        gone ahead and built a very strong and committed team that executes the
        visions of the company.
      </p>
      <p>
        The organization was the first company in Chennai to be awarded with ISO
        9001:2008 during the year 2009 and the fifth company in Chennai to be
        awarded the ISO 9001:2000 during the year 2005. The company was also the
        first to be rated by <strong>CRISIL</strong> in the city of Chennai.
      </p>
      <p>
        The Company currently also owns and operates <strong>Spectrum Mall</strong> in
        Perambur, Chennai. It has a vacant land near the mall at Market Street,
        also it has 8 flats at Maduravoyal, Chennai.
      </p>
      <p>
        <strong>Liquidation Order:</strong> IA/(IBC)/80/CHE/2023 In IBA/870/2020 dated
        15th March, 2022, the Hon’ble NCLT, Chennai Bench
      </p>
      <p>
        <strong>Insolvency Professional:</strong> CA Mahalingam Suresh Kumar
      </p>
      <p>
        Registered Office of the CD: NO.33, PAPER MILLS ROAD, HEMAVATHY COMPLEX, II FLOOR,
        PERAMBUR, CHENNAI, Tamil Nadu - 600011.
      </p>
      <p>
        <strong>Address of the Liquidator:</strong> M/s. SPP Insolvency Professionals LLP,  
        2nd Floor, CODISSIA, G.D. Naidu Towers, Huzur Road, Coimbatore - 641018  
        <br />
        Email: <a href="mailto:msureshkumar@icai.org" className="text-indigo-600 underline">msureshkumar@icai.org</a>  
        <br />
        Phone: 73730-52341 / 94888-10404
      </p>
    </div>
  </section>
);




const Attachments = ({ attachments }) => {
  const [openRow, setOpenRow] = useState(null);

  const handleOpenFile = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">

      {/* Flex row with spacing */}
      <div className="flex flex-wrap gap-1">
        {attachments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow border border-gray-200 "
          >
            {/* Row Title */}
            <button
              onClick={() => setOpenRow(openRow === item.id ? null : item.id)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:bg-indigo-50 rounded-lg"
            >
              <span className="truncate">{item.title}</span>
              <span className="text-indigo-600">
                {openRow === item.id ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Options */}
            {openRow === item.id && (
              <div className="p-3 border-t border-gray-200 space-y-2">
                {["pdf", "doc", "ppt", "image", "video"].map((type) => (
                  <div
                    key={type}
                    onClick={() => handleOpenFile(item.url)}
                    className="cursor-pointer flex items-center gap-2 p-2 rounded hover:bg-indigo-100 transition"
                  >
                    {/* Icons */}
                    <span className="text-xl">
                      {type === "pdf" && "📄"}
                      {type === "doc" && "📝"}
                      {type === "ppt" && "📊"}
                      {type === "image" && "🖼️"}
                      {type === "video" && "🎬"}
                    </span>
                    {/* File name + type */}
                    <span className="text-gray-700 truncate">
                      {item.title} ({type.toUpperCase()})
                    </span>
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


const data = [
  {
    title: "Public Announcement",
    files: [
      { name: "Form A", url: "https://example.com/formA.pdf", icon: "📄" },
      { name: "E-cutting of Aajkaal dt 22-3-2024 (Page-7)", url: "https://example.com/aajkaal.pdf", icon: "📄" },
      { name: "E-cutting of BS (English), Kolkata dt 22-3-2024 (Page-20)", url: "https://example.com/bs.pdf", icon: "📄" },
      { name: "Caution Notices_dt 30.06.2025 and 01.07.2025", url: "https://example.com/caution.pdf", icon: "📄" },
    ],
  },
  {
    title: "Orders",
    files: [
      { name: "Order 1", url: "#", icon: "📑" },
      { name: "Order 2", url: "#", icon: "📑" },
    ],
  },
  {
    title: "Forms",
    files: [
      { name: "Form B", url: "#", icon: "📝" },
      { name: "Form C", url: "#", icon: "📝" },
    ],
  },
  {
    title: "List of Creditors",
    files: [
      { name: "Creditor List 2024", url: "#", icon: "📋" },
    ],
  },
  {
    title: "Expression of Interest",
    files: [
      { name: "EOI Document", url: "#", icon: "📄" },
    ],
  },
  {
    title: "Interim Finance",
    files: [
      { name: "Finance Report", url: "#", icon: "💰" },
    ],
  },
];


// Footer
const Footer = ({ company }) => (
  <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-center text-sm text-white rounded-t-xl">
    Registered Office: {company.registeredOffice} • Contact: 73730-52341 / 94888-10404
  </footer>
);

export default function GangaFoundationLandingPage() {
  const company = {
    name: "GANGA FOUNDATIONS PRIVATE LIMITED",
    cin: "U45201TN2004PTC054417",
    registeredOffice:
      "NO.114A AND 114B, PAPER MILLS ROAD, PERAMBUR, CHENNAI – 600011, TAMILNADU",
    profile: `GANGA FOUNDATIONS PRIVATE LIMITED, incorporated on October 08, 2004, is a ISO 9001:2015 certified company. Since its inception, the Company has come a long way as a Builder, Promoter, Infrastructure & Urban Development and Real Estate player. The organization was promoted by Mr. S. Senthil Kumar & Mr. C. Chitti Babu. Over a period of time, they have gone ahead and built a very strong and committed team that executes the visions of the company. The company currently also owns and operates Spectrum Mall in Perambur, Chennai. It has a vacant land Near the mall at Market Street, also it has 8 flats at Maduravoyal, Chennai.`,
    liquidOrder:
      "Liquidation Order No. IA/(IBC)/80/CHE/2023 In IBA/870/2020 dated 15th March, 2022, the Hon’ble NCLT, Chennai Bench",
    liquidator: `Name of the Insolvency Professional – CA Mahalingam Suresh Kumar\nRegistered Office of the CD: NO.33, PAPER MILLS ROAD, HEMAVATHY COMPLEX, II FLOOR, PERAMBUR, CHENNAI, Tamil Nadu - 600011.`,
  };

  const attachments = [
    { id: 1, title: "PDF 1", type: "pdf" },
    { id: 2, title: "PDF 2", type: "pdf" },
    { id: 3, title: "Video", type: "video" },
    { id: 4, title: "Image", type: "image" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100  space-y-8">
      <Hero company={company} />
      <div className="px-6 py-3 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded shadow-md">
        CIN: {company.cin}
      </div>
      <CompanyInfo company={company} />
      <Slide />
      <WhoWeAre />
    <h3 className="text-3xl font-bold mb-8 text-center text-indigo-700">
     Attachments
    </h3>

      <DropdownList data={data} />
      <Footer company={company} />
      
    </div>
  );
}
