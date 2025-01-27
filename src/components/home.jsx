import React from "react";
import first from "../assets/main/first.jpg";
import second from "../assets/main/second.jpg";
import {Link} from "react-router-dom"
import { FaCertificate, FaLeaf, FaUtensils, FaShieldAlt } from 'react-icons/fa';

import "./css/home.css";

export default function Main() {
    const images = [
        import('../assets/slider/1.jpg'),
        import('../assets/slider/2.jpg'),
        import('../assets/slider/3.jpg'),
        import('../assets/slider/4.jpg'),
        import('../assets/slider/Ashutosh.jpg'),
        import('../assets/slider/alsa.jpg'),
        import('../assets/slider/aura.jpg'),
        import('../assets/slider/bhagwati.jpg'),
        import('../assets/slider/brixton.jpg'),
        import('../assets/slider/caps.jpg'),
        import('../assets/slider/deo.jpg'),
        import('../assets/slider/enhanced.jpg'),
        import('../assets/slider/excel.jpg'),
        import('../assets/slider/fab-iron.jpg'),
        import('../assets/slider/guru.jpg'),
        import('../assets/slider/heavy.jpg'),
        import('../assets/slider/jaivel.jpg'),
        import('../assets/slider/jayveer.jpg'),
        import('../assets/slider/karishma.jpg'),
        import('../assets/slider/labh-eng.jpg'),
        import('../assets/slider/lion-color.jpg'),
        import('../assets/slider/mahalaxmi.jpg'),
        import('../assets/slider/mett-bio.jpg'),
        import('../assets/slider/ncore.jpg'),
        import('../assets/slider/ntex.jpg'),
        import('../assets/slider/powerful.jpg'),
        import('../assets/slider/rasna.jpg'),
        import('../assets/slider/shivam.jpg'),
        import('../assets/slider/siddhivinayak.jpg'),
        import('../assets/slider/sor.jpg'),
        import('../assets/slider/unick.jpg'),
        import('../assets/slider/verman.jpg'),
        import('../assets/slider/vijay-coat.jpg'),
        import('../assets/slider/vijay-shree.jpg'),
        import('../assets/slider/zeal.jpg')
    ];

    const [loadedImages, setLoadedImages] = React.useState([]);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        Promise.all(images).then((importedImages) => {
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
                <div className="mainimages">
                    <div className="overlay"><h2>Consulting</h2></div>
                </div>
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
                <h1>ISO Consultant in Ahmedabad, ISO Certification in Ahmedabad, ISO Certification Consultant in Ahmedabad</h1>
                <p>
                    The Company is promoted by 10 years industrial experience related to ISO Management systems with an aim to provide effective and result-oriented services of ISO 9001:2015 Quality management system, EN ISO 3834-2:2021, EN ISO 1090-2:2018, ISO 14001:2015, ISO 45001:2018, ISO 27001:2013, IATF 16949:2016, ISO 22163:2017, HACCP, ISO 22000:2018, FSSC 22000, BRC for Food & Packaging Material, Eco Vadis CSR Rating, SA 8000:2014, SMETA, ISO 17025:2017 NABL, and various statistical tools.
                    Quality Consulting is certified for various industries including Engineering, Fabrication, Machinery, Pharmaceutical, Packaging, Food, Automotive, Textile, Rubber, and Civil.
                    Quality Consulting firm is registered under MSME Udyog Adhar number: GJ01D0105671 since 09.05.2018. Mr. Jaydev Parmar is the proprietor with extensive experience in quality management systems and customer audit compliance.
                    He holds a Bachelor of Commerce degree and an MSC in Quality and Productivity Management since 2013.
                </p>
                <p>Our team of experts is equipped with the latest knowledge and skills to tackle any challenge in the industry.</p>
            </div>
            <h2 className="allservicestitle">
                        Services - ISO Consultant and Certification in Ahmedabad
                    </h2>
            <div className="allservices">
                <div className="servicecard">
                <FaCertificate className="icon" />
                <h3>Quality Management</h3>
                <p>Achieve excellence in quality management with our ISO 9001 certification services.</p>
            </div>
            <div className="servicecard">
                <FaLeaf className="icon" />
                <h3>Environmental Management</h3>
                <p>Enhance your environmental management practices with our ISO 14001 certification.</p>
            </div>
            <div className="servicecard">
                <FaUtensils className="icon" />
                <h3>Food Safety Management System</h3>
                <p>Ensure food safety and quality with our ISO 22000 certification services.</p>
            </div>
            <div className="servicecard">
                <FaShieldAlt className="icon" />
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
}function Slider() {
    const imagePaths = [
        "../assets/slider/aura.jpg",
        "../assets/slider/bhagwati.jpg",
        "../assets/slider/caps.jpg",
        "../assets/slider/4.jpg",
        "../assets/slider/ntex.jpg",
        "../assets/slider/rasna.jpg",
        // Add more image paths as needed
    ];

    const [images, setImages] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsPerPage = 3; // Number of images to display at once

    React.useEffect(() => {
        const loadImages = async () => {
            try {
                const importedImages = await Promise.all(
                    imagePaths.map((path) => import(/* @vite-ignore */ `${path}`))
                );
                setImages(importedImages.map((img) => img.default)); // Set the default exports of the imported images
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        loadImages();
    }, []);

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
            <h1 className="allservicestitle">Types of Clients Catered - ISO Certification in Ahmedabad, ISO Consultant in Ahmedabad</h1>
            <p className="para">Hire experienced ISO Certification Consultant in Ahmedabad for quick assistance with the ISO certification process.</p>
            <div className="imageswrapper">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-btn">←</button>
                <div className="images-container">
                    {images.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
                        <div key={index} className="images">
                            <img src={image} alt={`Client ${index + currentIndex + 1}`} />
                            <h2>Some Industry</h2>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= images.length} className="nav-btn">→</button>
            </div>
        </div>
    );
}
