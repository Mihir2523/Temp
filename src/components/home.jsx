import React from "react";
import first from "../assets/main/first.jpg";
import second from "../assets/main/second.jpg";
import {Link} from "react-router-dom"
import { FaCertificate, FaLeaf, FaUtensils, FaShieldAlt, FaIndustry, FaWrench, FaTrain } from 'react-icons/fa';

import "./css/home.css";
const ImageChanger = () => {
  const [currentImage, setCurrentImage] = React.useState(first);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === first ? second : first
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const mainImagesStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    height: '500px',
    backgroundImage: `url(${currentImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'fadeInOut 8s infinite', // Animation for fading effect
    margin: '1rem 0',
    transition: 'all 0.3s linear',
  };
  return (
    <div style={mainImagesStyle}>
      <div className="overlay">
        <h2>ISO Consulting</h2>
      </div>
    </div>
  );
};

export default function Main() {
    const images = [
          import('../assets/slider/1_DIFD LOGO.jpg'),
          import('../assets/slider/2_HEMPEL.png'),
          import('../assets/slider/3_JINDAL.jpg'),
          import('../assets/slider/4_HIFLEX.jpg'),
          import('../assets/slider/5_ESSEM.png'),
          import('../assets/slider/6_ALLMARC.jpg'),
          import('../assets/slider/7_INDUTCH.png'),
          import('../assets/slider/8_OCTANT.jpg'),
          import('../assets/slider/9_BANKIN.jpg'),
          import('../assets/slider/10_FINOX.png'),
          import('../assets/slider/11_SAFEX INDUSTRIES LIMITED.png'),
          import('../assets/slider/12_KARAMTARA.png'),
          import('../assets/slider/13_SHAIFALI STEELS LIMITED.jpg'),
          import('../assets/slider/14_DELITE.png'),
          import('../assets/slider/15_LINET.png'),
          import('../assets/slider/16_LSW.png'),
          import('../assets/slider/17_SHREE HARIHAR.png'),
          import('../assets/slider/18_ANJAR.png'),
          import('../assets/slider/19_BACANCY.jpg'),
          import('../assets/slider/20_FLEXISHINE POLYBENDS LLP.png'),
          import('../assets/slider/21_GANPAT UNIVERSITY.jpg'),
          import('../assets/slider/22_MATRIX ENGINEERS.png'),
          import('../assets/slider/23_POWERFUL.png'),
          import('../assets/slider/24_ROYAL.png'),
          import('../assets/slider/25_SANKWALA.png'),
          import('../assets/slider/26_SUKRIT INDUSTRIES.png'),
          import('../assets/slider/27_TECHFLOW.png'),
          import('../assets/slider/28_PITRUKRUPA ENGINEERING.png'),
          import('../assets/slider/29_SHREEJI.png'),
          import('../assets/slider/30_ARD.png'),
          import('../assets/slider/31_SELEX.png'),
          import('../assets/slider/32_SIGMA CORPORATION.png'),
          import('../assets/slider/33_PNEUFLOW.jpg'),
          import('../assets/slider/34_PNEUTORK.png'),
          import('../assets/slider/35_PRECISION TECHNOPLAST PVT. LTD..png')
        ];

    const [loadedImages, setLoadedImages] = React.useState([]);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        Promise.all(images)
        .then((importedImages) => {
            const duplicatedImages = [
                ...importedImages.map(img => img.default),
                ...importedImages.map(img => img.default)
            ];
            setLoadedImages(duplicatedImages);
        });

    }, []);

    return (
        <main>
            <section className="container">
                <ImageChanger />
                <div className="gap"></div>
                <div className="slider">
                    <div className="list">
                        {loadedImages.map((source, index) => (
                            <div key={index} className="item">
                                <img src={source} alt={`Partner ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wrapper">
            <div className="basicinfo">
                <h2>Quality Consulting</h2>
                <h1>ISO Consultant in Gujarat, ISO Certification in Gujarat, ISO Certification Consultant in Gujarat</h1>
                <p>
                    The Company is promoted by 10 years industrial experience related to ISO Management systems with an aim to provide effective and result-oriented services of ISO 9001:2015 Quality management system, EN ISO 3834-2:2021, EN ISO 1090-2:2018, ISO 14001:2015, ISO 45001:2018, ISO 27001:2013, IATF 16949:2016, ISO 22163:2017, HACCP, ISO 22000:2018, FSSC 22000, BRC for Food & Packaging Material, Eco Vadis CSR Rating, SA 8000:2014, SMETA, ISO 17025:2017 NABL, and various statistical tools.
                    Quality Consulting is certified for various industries including Engineering, Fabrication, Machinery, Pharmaceutical, Packaging, Food, Automotive, Textile, Rubber, and Civil.
                    Quality Consulting firm is registered under MSME Udyog Adhar number: GJ01D0105671 since 09.05.2018. Mr. Jaydev Parmar is the proprietor with extensive experience in quality management systems and customer audit compliance.
                    He holds a Bachelor of Commerce degree and an MSC in Quality and Productivity Management since 2013.
                </p>
                <p>Our team of experts is equipped with the latest knowledge and skills to tackle any challenge in the industry.</p>
            </div>
            <h2 className="allservicestitle">
                        Services - ISO Consultant and Certification in Gujarat
                    </h2>
            <div className="allservices">
            <div className="servicecard">
                <FaWrench className="iconn col3" />
                <h3>ISO 3834</h3>
                <p> Welding Workshop Approval for Quality Requirements of Fusion welding in meta.</p>
            </div>
            <div className="servicecard">
                <FaIndustry className="iconn col5" />
                <h3>EN 1090</h3>
                <p>CE Mark Steel Structure Part of Steel structure in metallic materials.</p>
            </div>
            <div className="servicecard">
                <FaTrain className="iconn col6" />
                <h3>EN 15085</h3>
                <p>Manufacturing of Railway Vehicles or of components of Railway Vehicles</p>
            </div>
            
            <div className="servicecard">
                <FaCertificate className="iconn col1" />
                <h3>Quality Management</h3>
                <p>Achieve excellence in quality management with our ISO 9001 certification services.</p>
            </div>
            <div className="servicecard">
                <FaLeaf className="iconn col2" />
                <h3>Environmental Management</h3>
                <p>Enhance your environmental management practices with our ISO 14001 certification.</p>
            </div>
            <div className="servicecard">
                <FaShieldAlt className="iconn col4" />
                <h3>Occupational Health and Safety</h3>
                <p>Ensure occupational health and safety with our ISO 45001 certification services.</p>
            </div>
            </div>
        </div>
        <Slider />
        <div className="contactplease">
            <h1>+91 9714820103.</h1>
            <h1>Contact Us Today - We Anwser Our Phones</h1>
            <button><Link to="/contactus">Contact us</Link></button>
        </div>
            </section>
        </main>
    );
}

function Slider() {
    const imagePaths = [
        import('../assets/client/agro-based-industry.jpg'),
        import('../assets/client/hospitals.jpg'),
        import('../assets/client/automobile-Industry.jpg'),
        import('../assets/client/pharmaceuticals-industry.jpg'),
        import('../assets/client/chemical-industry.jpg'),
        import('../assets/client/transportation-logistics.jpg'),
        import('../assets/client/food-processing-beverages.jpg'),
    ];

    const industryList = [
        { industry: "Agro-based Industry", image: '../assets/client/agro-based-industry.jpg' },
        { industry: "Hospitals", image: '../assets/client/hospitals.jpg' },
        { industry: "Automobile Industry", image: '../assets/client/automobile-Industry.jpg' },
        { industry: "Pharmaceuticals Industry", image: '../assets/client/pharmaceuticals-industry.jpg' },
        { industry: "Chemical Industry", image: '../assets/client/chemical-industry.jpg' },
        { industry: "Transportation & Logistics", image: '../assets/client/transportation-logistics.jpg' },
        { industry: "Food Processing & Beverages", image: '../assets/client/food-processing-beverages.jpg' }
    ];

    const getItemsPerPage = () => {
        const width = window.innerWidth;
        if (width > 1200) return 3; // Large screens
        if (width > 768) return 2;  // Medium screens
        return 1;                   // Small screens
    };

    const [images, setImages] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(getItemsPerPage());

    React.useEffect(() => {
        Promise.all(imagePaths).then((importedImages) => {
            const combinedData = importedImages.map((img, index) => ({
                src: img.default,
                industry: industryList[index].industry
            }));
            setImages(combinedData);
        });

        // Update items per page on resize
        const handleResize = () => {
            const newItemsPerPage = getItemsPerPage();
            setItemsPerPage(newItemsPerPage);

            // Adjust currentIndex based on new items per page
            if (currentIndex + newItemsPerPage > images.length) {
                setCurrentIndex(Math.max(0, images.length - newItemsPerPage));
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex, images.length]); // Add dependencies

    const handleNext = () => {
        if (currentIndex + itemsPerPage < images.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="clients">
            <h1 className="allservicestitle bottomtitle">Types of Clients Catered - ISO Certification in Gujarat, ISO Consultant in Gujarat</h1>
            <p className="para">Hire experienced ISO Certification Consultant in Gujarat for quick assistance with the ISO certification process.</p>
            <div className="imageswrapper">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-btn">←</button>
                <div className="images-container">
                    {images.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                        <div key={index} className="images">
                            <img src={item.src} alt={`Client ${index + currentIndex + 1}`} />
                            <h2>{item.industry}</h2>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= images.length} className="nav-btn">→</button>
            </div>
        </div>
    );
}
