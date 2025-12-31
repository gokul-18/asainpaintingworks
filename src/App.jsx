import React from 'react';
import interior from './assets/interior.png';
import exterior from './assets/exterior.png';
import putty from './assets/putty.png';

export default function App() {
  return (
    <div>
      <header>
        <h1>Asian Paints Professional Painting Services</h1>
        <p>Interior • Exterior • Full Putty • Affordable Rates</p>
      </header>

      <section>
        <h2 style={{ textAlign: 'center' }}>Our Services</h2>
        <div className="cards">
          <div className="card">
            <img src={interior} alt="Interior Painting" />
            <h3>Interior Painting</h3>
            <p>Tractor & Royale painting with smooth finish.</p>
          </div>

          <div className="card">
            <img src={exterior} alt="Exterior Painting" />
            <h3>Exterior Painting</h3>
            <p>Ace, Apex & Ultima for long-lasting protection.</p>
          </div>

          <div className="card">
            <img src={putty} alt="Putty Work" />
            <h3>Full Wall Putty</h3>
            <p>Complete surface levelling for premium look.</p>
          </div>
        </div>
      </section>

      <div className="contact">
        <h2>Contact Us</h2>
        <p>📞 <a href="tel:7845363366">7845363366</a></p>
        <div className="address">
          📍 No:3/7, Ramanujam Garden Street,<br />
          Pattalam, Chennai – 600012
        </div>
      </div>
    </div>
  );
}
