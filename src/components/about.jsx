import React from 'react';
import "./css/about.css";

export default function About() {
  return (
    <main>
      <section className="container">
        <div className="heading"><h1>Quality Consulting</h1></div>
        <section className="container-wrapper">
          <p className="para">The Company is promoted by 12 years industrial experience related ISO Management system with an aim to provide effective and result oriented services of ISO 9001- Quality management system, EN ISO 3834 Quality requirements for fusion welding of metallic material- Comprehensive Quality Requirements , EN ISO 1090-2 Execution of steel structures and aluminum structures - Technical requirements for steel structures, EN 15085- Manufacturer of Railway Vehicles or of components of Railway vehicles,  ISO 14001:2015 Environment Management System, ISO 45001- Occupational Health & Safety Management System, ISO 27001 Information Security Management System, IATF 16949- Automotive Quality Management System, ISO 22163-International Standard For Specially Railway Industry, HACCP- Hazard Analysis Critical Control Points, ISO 22000-Food Safety Management System, FSSC 22000- Food Safety Standard Certification, BRC for Food & Packaging Material, Eco Vadis CSR Rating, SA 8000: 2014 Social Accountability, SMETA- SEDEX 6.1 Member of Ethical Trade Audit, ISO 17025 NABL- National Accreditation Board of Laboratory, 5s Japanese techniques, 7 quality control tools & other statistical tools & techniques, IATF Core Tools etc. Quality Consulting is certified ISO Standard various type of industries like Engineering, Fabrications, Machinery, Pharmaceutical, Packaging, Food, Automotive, Textile, Rubber, Civil, Laboratory like Food, Pharmaceutical, Engineering, Packaging, Civil etc. Quality Consulting firm is register UDYAM - GJ-01-0359775, dated: 09.05.2018. Mr. Jaydev Parmar is proprietor of Quality Consulting. He was highly experience in quality management system as well as customer audit compliances. He has already faced Tata Motors Ltd, Nestle, CLW / DLW, SPX Flow, Rexroth, Ingersoll Rand, Senvion Wind Technology Pvt. Ltd, INOX wind Ltd, Siemens Limited, Siemens Gamesha, Sanmar Group, NTPC , BHEL, Micro finish Valves Pvt. Ltd, Toshima India Pvt. Ltd , Delvol Flow Controls etc. Mr. Jaydev Parmar is completed MSC. QPM (Master in quality and Productivity Management since 2013.</p>
          <div className="h-para">

            <h1>Company Overview</h1>
            <p className="para">Our ISO certification consultancy services play pivotal role in making an organization the trusted one. Our assistance in quality certifications and relevant trainings towards international quality standards has always helped our clients in clearing the ISO audit and getting the subsequent NABL Consultant in Ahmedabad and ISO certification consultancy services in the very first attempt. We work with the most reputed certification bodies to ensure the proper national and international recognition of the certificate provided. With our client centric approach, we have established cordial relations with several reputed and recognized clients across the country.</p>
            <p className="para">Quality Consulting is a Consultancy Organization in India, engaged in providing quality & productivity enhancement implementation training programs & consultation services. Aimed towards client’s contentment, we are committed to provide effective guidance and solutions such as internal quality auditor training, ISO quality auditing, six sigma, ISO 9001 quality management & productivity management services with specializing in the field of Quality, Environmental and Food Safety Management System. We assist and facilitate the organizations in obtaining ISO 9001, ISO 14001, TS/IATF 16949, ISO 22000, AS 9100, OHSAS 18001/ISO 45001& CE Marking etc. in the most effective, economical, time bound and easy to implement manner. Our services are rendered in the most extensive manner and are designed as per client’s operational system. We work with the, most reputed certification bodies/agencies like Bureau Veritas, SGS, TUV, DNV, BSCIC etc. to ensure your certificate have the proper National and International recognition. Our clients successfully clear the ISO audit in the first attempt and achieve ISO certificate in first go. 100 % successful certification guaranteed. Our ISO Certification Consultancy Services are unique, wherein we provide services from the beginning to the end and we actually prepare Client Company’s ISO / Quality policies and procedures to expedite obtaining an ISO / other quality registrations. We are continuously improving our proven templates, which are customized to suit client’s unique requirements. Moreover, tools, forms and other resources are constantly being developed and updated to ensure that our client receives the best possible service during in the quality standard implementation process. The unique blend of our ISO consultancy services enables our clients to benefit from our experience, knowledge, network and learning in other services and hence build and enhance competitive advantage.</p>
          </div>
          <div className="h-para">
            <h1>Domain Expertise</h1>
            <p className="para">Our proficient and sound understanding of various quality management systems has enabled us being recognized one of the most trusted quality management consultancy providers. Certification ensures competitive advantages and secures future business by identifying areas for improvement. Our entire service range is strategically designed and developed to offer a full fledged platform to our clients in achieving their objectives and improving business performance. The quality training enables them in identifying and solving problems and preventing their recurrence, thereby improving performance. This further creates quality consciousness and job contentment among the workforce.</p>
          </div>
          <div className="h-para">
            <h1>Client Satisfaction</h1>
            <p className="para">Client Satisfaction
Our client centric approach and effective ISO certification consultant services offering ISO 9001 certification, ISO 3834 Certification , EN 1090 Certification, EN 15085 Certification, PED & AD 2000 Certification , NORSORK Certification,  ISO 14001 certification, ISO 22000 certification, ISO 27001 certification, AS 9100C Certification,  IATF 16949 certification, OHSAS 45001 certification, SA 8000 certification, GMP WHO certification, CE marking certification, NABL 17025 certification, IRIS certification and auditing services have returned rave reviews from our clients all across the country. We are known to assist our clients in identifying the areas where they could improve efficiency and effectiveness by minimizing wastage and rejection so that it could improve their marketability. Our close coordination with reputed certification agencies helps providing our clients the most effective and economic services. We are destined to stand side by side with our clients in enhancing competitive advantages over their competitors. All these efforts made by us have resulted in having a strong base of well-known clients from various industrial sectors.</p>
          </div>
          <div className="h-list">
            <h1>Why Us</h1>
            <ul className="simplelist">
              <li>Effective Service Range</li>
              <li>Economical And Time Bound Deliverance</li>
              <li>Client Centric Approach</li>
              <li>Efficient Training And Documentation</li>
              <li>Team Of Expert Quality Management Personnel</li>
              <li>Domain Expertise</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

/*
  1. Heading with Paragraph = h-para
          <div className="h-para">
            <h1>Heading</h1>
            <p className="para">{str}</p>
          </div>

  2. Heading With List = h-list
          <div  className="h-list">
            <h1>Heading</h1>
            <ul className="simplelist">
             {
              ls.map(item => <li>{item}</li>)
            } 
            </ul>
          </div>
  
  3. Subheading With List = sub-list
          <div  className="h-list sub-list">
            <h1>Heading</h1>
            <ul className="simplelist">
             {
              ls.map(item => <li>{item}</li>)
            } 
            </ul>
          </div>
  
  4. Just A Paragraph = para
          <p className="para">{str}</p>

  5. Just A List = simplelist
          <ul className="simplelist">
            {
              ls.map(item => <li>{item}</li>)
            }
          </ul>
  6. Heading With Paragraph and Image , Headigg with Paragraphs and Images
    
*/