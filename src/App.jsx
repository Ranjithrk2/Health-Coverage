import React, { useState } from "react";
import './App.css';
import logo from "./images/logo.png";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [income, setIncome] = useState("");
  const [age, setAge] = useState("");
  const [dependents, setDependents] = useState("");
  const [result, setResult] = useState("");
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const suggestCover = () => {
    const base = 500000;
    const ageFactor = age < 30 ? 1.2 : age < 50 ? 1.5 : 2;
    const depFactor = dependents > 0 ? 1 + dependents * 0.1 : 1;
    const estimated = Math.round(base * ageFactor * depFactor);
    setResult(`₹${estimated.toLocaleString()}`);
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <div className="heading-text">
            <h1>NICSAN Health</h1>
            <p>Your guide to secure health</p>
          </div>
        </div>
       <div className="theme-toggle">
  <span className="theme-icon">🌞</span>
  <label className="switch">
    <input type="checkbox" checked={isDark} onChange={toggleTheme} />
    <span className="slider round"></span>
  </label>
  <span className="theme-icon">🌙</span>
</div>

      </header>

      <section className="info-section">
        <div className="info-block left">
          <h2>Why Estimate?</h2>
          <p>Estimating your health cover helps prepare you financially for any unexpected health issues.</p>
        </div>
        <div className="info-block right">
          <h2>Custom Tailored</h2>
          <p>Our AI tailors a cover recommendation based on your age and family situation.</p>
        </div>
        <div className="info-block left">
          <h2>What is Health Cover?</h2>
          <p>Health cover is a financial safety net that supports you in times of medical need.</p>
        </div>
        <div className="info-block right">
          <h2>Who Needs It?</h2>
          <p>Everyone! From singles to families, health coverage is a necessity, not a luxury.</p>
        </div>
      </section>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Dependents"
          value={dependents}
          onChange={(e) => setDependents(e.target.value)}
        />
        <button className="gradient-button" onClick={suggestCover}>
          Suggest Cover 🚀
        </button>

        {result && (
          <div className="result">
            <h3>Recommended Cover: {result}</h3>
            <div className="embedded-quote">
              "There is no remedy for love but to love more."
              <footer>- Henry David Thoreau</footer>
            </div>
          </div>
        )}
      </div>

      <div className="company-info-box">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <div className="company-name">NICSAN Health Advisors</div>
        <div className="company-detail">
          <h3>Why Us?</h3>
          <p>We blend technology and care to deliver the best health cover suggestions to secure your future.</p>

          <h3>Our Motto</h3>
          <p>Guiding you to a healthier tomorrow, today.</p>

          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@nicsan.com" className="contact-link">support@nicsan.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="contact-link">+91 12345 67890</a></p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-center">
        
          <div className="footer-section">
            <h4>NICSAN Health</h4>
            <p>Dedicated to your health and happiness. Proudly serving families with heart and AI-powered guidance.</p>
          </div>
          <div className="footer-section">
            <p>&copy; 2025 NICSAN Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
