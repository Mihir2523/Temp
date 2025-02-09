import React from 'react';
import {NavLink} from "react-router-dom"
import "./css/services.css";

/*
    { img: image2, end: "ohsas", text: "OHSAS" },
*/
export default function Services() {
  function get(image,end,text){
    let t="/services/"+end;
    return(
        <div className="card">
          <img src={image} alt="API Service" />
          <button><NavLink to ={t} >{text}</NavLink></button>
        </div>
    )
  }
   const data = [
  { img: "/api-certificate-1.jpg", end: "api", text: "API" },
  { img: "/AS-9100-Certification.jpg", end: "as9100", text: "AS9100" },
  { img: "/BRC.jpg", end: "brc", text: "BRC" },
  { img: "/CE-Marking.jpg", end: "cecertification", text: "CE Certification" },
  { img: "/api-certificate-1.jpg", end: "fssai", text: "FSSAI" },
  { img: "/HACCP.jpg", end: "haccp", text: "HACCP" },
  { img: "/Halal.jpg", end: "halal", text: "Halal" },
  { img: "/IATF-16949-2016.jpg", end: "iatf", text: "IATF" },
  { img: "/ISO-13485.jpg", end: "iso13485", text: "ISO 13485" },
  { img: "/ISO-14001-EMS.jpg", end: "is014001", text: "ISO 14001" },
  { img: "/FSSC-22000.jpg", end: "is022000", text: "ISO 22000" }, // Assuming FSSC-22000.jpg is intended for ISO 22000
  { img: "/NABH.jpg", end: "nabh", text: "NABH" },
  { img: "/NABL.jpg", end: "nabl", text: "NABL" },
  { img: "/ISO-9001-2015.jpg", end: "profile", text: "ISO 9001" },
  { img: "/SA-8000.jpg", end: "sedex", text: "SEDEX" }, // Assuming SA-8000.jpg is intended for SEDEX
];


  return (
    <main>
      <section className="hero">
        {
          data.map(item => get(item.img,item.end,item.text))
        }
      </section>
    </main>
  );
}
