import React from "react";
import founderImg from "../assets/founder.webp";
import "../scss/About/About.scss";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Story</h1>
        <p>
          At WOW+, we believe wellness should be delicious. From a kitchen idea
          to a wellness revolution, we craft drinks that energize, calm, and
          inspire.
        </p>
      </section>

      {/* Founder Section */}
      <section className="founder">
        <div className="founder-img">
          <img src={founderImg} alt="Founder" />
        </div>
        <div className="founder-text">
          <h2>Meet Aaryan Mehta</h2>
          <p>
            Aaryan Mehta founded WOW+ with a bold vision: to blend holistic
            wellness with bold flavor. After exploring ancient herbal remedies
            in the Himalayas and modern food tech in Singapore, he merged both
            worlds in a can — and WOW+ was born.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>
              “WOW+ is my go-to chill drink after work. The Lemonade one? So
              refreshing.”
            </p>
            <span>— Riya S., UX Designer</span>
          </div>
          <div className="card">
            <p>
              “The CBD content really helps with my muscle recovery. Tastes
              amazing too.”
            </p>
            <span>— Karan M., Fitness Coach</span>
          </div>
          <div className="card">
            <p>
              “It’s the only CBD drink that actually tastes good. Berry Boost is
              a game-changer.”
            </p>
            <span>— Mehak T., Editor</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
