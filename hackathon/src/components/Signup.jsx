// Signup.jsx
import React from "react";
import "../scss/Signup/Signup.scss";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Join the Chill Club</h2>
        <p className="signup-subtitle">
          Sign up to get exclusive offers, updates & energy boosts 🧊⚡
        </p>

        <form className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Frost" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
