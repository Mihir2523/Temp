// Service catalogue. Each slug must match a top-level key in data.json so the
// dynamic /services/:id route resolves to content.
export const SERVICES = [
  { img: "/ISO-9001-2015.jpg", slug: "profile", title: "ISO 9001", category: "Quality", subtitle: "Quality Management System" },
  { img: "/ISO3834.jpg", slug: "iso3834", title: "ISO 3834", category: "Welding", subtitle: "Welding Quality Requirements" },
  { img: "/EN1090.jpg", slug: "en1090", title: "EN 1090", category: "Welding", subtitle: "Steel Structures CE Mark" },
  { img: "/EN15085.jpg", slug: "en15085", title: "EN 15085", category: "Welding", subtitle: "Railway Vehicle Manufacturing" },
  { img: "/ISO-14001-EMS.jpg", slug: "iso14001", title: "ISO 14001", category: "Environment", subtitle: "Environmental Management" },
  { img: "/ISO-45001-EMS.jpg", slug: "iso45001", title: "ISO 45001", category: "Safety", subtitle: "Occupational Health & Safety" },
  { img: "/FSSC-22000.jpg", slug: "iso22000", title: "ISO 22000", category: "Food", subtitle: "Food Safety Management" },
  { img: "/FSSC--22000.jpg", slug: "fssc22000", title: "FSSC 22000", category: "Food", subtitle: "Food Safety Certification" },
  { img: "/BRC.jpg", slug: "brc", title: "BRC", category: "Food", subtitle: "Global Food Safety Standard" },
  { img: "/Halal.jpg", slug: "halal", title: "Halal", category: "Food", subtitle: "Halal Certification" },
  { img: "/IATF-16949-2016.jpg", slug: "iatf", title: "IATF 16949", category: "Automotive", subtitle: "Automotive Quality" },
  { img: "/AS-9100-Certification.jpg", slug: "as9100", title: "AS 9100", category: "Aerospace", subtitle: "Aerospace Quality" },
  { img: "/ts.jpg", slug: "ts22163", title: "ISO/TS 22163", category: "Railway", subtitle: "Railway Industry QMS" },
  { img: "/sedex.jpg", slug: "sedex", title: "SEDEX", category: "Social", subtitle: "Ethical Trade Audit" },
  { img: "/SA-8000.jpg", slug: "sa8000", title: "SA 8000", category: "Social", subtitle: "Social Accountability" },
  { img: "/eco.jpg", slug: "eco", title: "EcoVadis", category: "Social", subtitle: "CSR Sustainability Rating" },
  { img: "/NABL.jpg", slug: "nabl", title: "NABL", category: "Lab", subtitle: "Laboratory Accreditation" },
  { img: "/fssai.jpg", slug: "fssai", title: "FSSAI", category: "Food", subtitle: "Food Safety License" },
  { img: "/CE-Marking.jpg", slug: "cecertification", title: "CE Marking", category: "Product", subtitle: "European Conformity" },
  { img: "/HACCP.jpg", slug: "haccp", title: "HACCP", category: "Food", subtitle: "Hazard Analysis Critical Points" },
  { img: "/ISO-13485.jpg", slug: "iso13485", title: "ISO 13485", category: "Medical", subtitle: "Medical Devices QMS" },
];

export const CATEGORIES = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];
