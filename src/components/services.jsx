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
          <img src={image} alt="Service" />
          <button><NavLink to ={t} >{text}</NavLink></button>
        </div>
    )
  }
   const data = [
  { img: "/ISO-9001-2015.jpg", end: "profile", text: "ISO 9001" },
  { img: "/ISO3834.jpg", end: "iso3834", text: "ISO 3834" },
  { img: "/EN1090.jpg", end: "en1090", text: "EN 1090" },
  { img: "/EN15085.jpg", end: "en15085", text: "EN 15085" },
  { img: "/ISO-14001-EMS.jpg", end: "is014001", text: "ISO 14001" },
  { img: "/ISO-45001-EMS.jpg", end: "iso45001", text: "ISO 45001" },
  { img: "/FSSC-22000.jpg", end: "is022000", text: "ISO 22000" },
  { img: "/FSSC--22000.jpg", end: "fssc22000", text: "FSSC 22000" },
  { img: "/BRC.jpg", end: "brc", text: "BRC" },
  { img: "/Halal.jpg", end: "halal", text: "Halal" },
  { img: "/IATF-16949-2016.jpg", end: "iatf", text: "IATF" },
  { img: "/AS-9100-Certification.jpg", end: "as9100", text: "AS9100" },
  { img: "/ts.jpg", end: "ts22163", text: "ISO/TS 22163" },
  { img: "/sedex.jpg", end: "sedex", text: "SEDEX" },
  { img: "/SA-8000.jpg", end: "sa8000", text: "SA 8000" },
  { img: "/eco.jpg", end: "eco", text: "ECO VADIS" },
  { img: "/NABL.jpg", end: "nabl", text: "NABL" },
  { img: "/fssai.jpg", end: "fssai", text: "FSSAI" },
  { img: "/CE-Marking.jpg", end: "cecertification", text: "CE Certification" },
  { img: "/HACCP.jpg", end: "haccp", text: "HACCP" },
  // { img: "/ISO-13485.jpg", end: "iso13485", text: "ISO 13485" },
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
