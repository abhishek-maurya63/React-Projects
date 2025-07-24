import React from "react";
import smiley from "../assets/smiley.png"; // Replace with your actual smiley image
import "../scss/Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-heading">
          let's keep <br /> in touch
        </h2>
        <div className="email-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Sign Up</button>
        </div>
      </div>
      <div className="footer-right">
        <img src={smiley} alt="Smiley" className="smiley" />
        <p className="copyright">2022 COPYRIGHT © CBD</p>
      </div>
    </footer>
  );
};

export default Footer;
