import React from 'react';
import image from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import "./css/services.css";

export default function Services() {
  return (
    <main>
      <section className="hero">
        <div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div><div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div><div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div><div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div><div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div><div className="card">
          <img src={image} alt="API Service" />
          <button>API</button>
        </div>
        <div className="card">
          <img src={image2} alt="ISO Service" />
          <button>ISO</button>
        </div>
      </section>
    </main>
  );
}
