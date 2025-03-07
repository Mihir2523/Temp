import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./css/form.css"

export default function Form() {
  const form = useRef();

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
    "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada",
    "China", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
    "India", "Indonesia", "Iran", "Ireland", "Italy", "Japan", "Mexico",
    "Netherlands", "New Zealand", "Norway", "Pakistan", "Poland", "Portugal",
    "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
    "Spain", "Sweden", "Switzerland", "Turkey", "United Arab Emirates",
    "United Kingdom", "United States"
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d38bmc6', 'template_nbcdp86', form.current, 'UhA1kX6jZaw9PeVCN')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again.');
      });
      e.target.reset()
  };

  return (
    <main className="main">
      <section className="container flex flex-center">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="input-data">
              <input type="text" placeholder="Name" name="uname" />
              <label htmlFor="uname">Your Name</label>
            </div>
            <div className="input-data">
              <input type="text" placeholder="Company" name="cname" />
              <label htmlFor="cname">Company Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="email" placeholder="Email" name="email" />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-data">
              <input type="text" placeholder="City" name="city" />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" placeholder="Code" name="zip" />
              <label htmlFor="zip">Postal Code</label>
            </div>
            <div className="input-data">
              <input type="tel" name="tel" />
              <label htmlFor="tel">Telephone No</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <select name="country" id="country" defaultValue="">
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <label htmlFor="country">Country</label>
            </div>
          </div>
          <div className="form-row textarea">
            <div className="input-data">
              <textarea cols="30" rows="10" name="address"></textarea>
              <label htmlFor="address">Address</label>
            </div>
          </div>
          <div className="form-row textarea">
            <div className="input-data">
              <textarea cols="30" rows="10" name="message"></textarea>
              <label htmlFor="message">Subject of Enquiry</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
