import React from "react";
import "../scss/About/About.scss";
import founder from "../assets/founder.jpg";
import CountUp from "../react bits/CountUp";
import GradientText from "../react bits/GradientText";
import TiltedCard from "../react bits/TiltedCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".text", {
      borderLeft: 0,
      opacity: 0,
      duration:0.5,
      ease: "power3.in",
    })

    tl.from(".text h2",{
      translateX:"-20%",
      duration: 1,
      ease: "power3.in",
      opacity:0
    })
    tl.from(".text p",{
      translateX:"-20%",
      duration: 1,
      ease: "power3.in",
      opacity:0
    })

  });

 

  return (
    <div className="about-page">
      <section className="hero">
        {/* <div className="container">
        </div> */}
      </section>

      <section className="founder">
        <div className="container founder-grid">
          <div className="text">
            <h2>Founder’s Spark</h2>
            <p>
              Riya Verma founded FrostFizz in 2022 after experimenting with
              fruit-based carbonation. Her idea? A fun drink without fake vibes.
              Low sugar, poppin' flavors, planet-friendly. That’s how FrostFizz
              began — in a college dorm with fizz and fire.
            </p>
          </div>
          <div className="image">
            <TiltedCard
              imageSrc={founder}
              altText="Riya Verma - Founder"
              captionText="Riya"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Riya Verma - Founder</p>
              }
            />
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            We’re here to unbore beverages. With real ingredients, 100%
            recyclable bottles and zero additives, we make cold drinks that
            don't just taste good — they *feel* good.
          </p>
        </div>
      </section>

      <section className="usps">
        <div className="container usps-grid">
          <div className="card pink">
            <h3>Natural Fruit Flavors</h3>
            <p>Juicy, bold, and honestly real.</p>
          </div>
          <div className="card blue">
            <h3>Planet-Loving Bottles</h3>
            <p>Recyclable & returnable. Your sip saves.</p>
          </div>
          <div className="card yellow">
            <h3>No Artificial Junk</h3>
            <p>Zero preservatives, full vibes.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div>
            {" "}
            <h2>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <CountUp
                  from={0}
                  to={100000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </GradientText>
            </h2>
            <p>Bottles Cracked</p>
          </div>
          <div>
            <h2>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <CountUp
                  from={0}
                  to={88}
                  separator=","
                  direction="up"
                  duration={1}
                  suffix="%"
                  className="count-up-vibe"
                />
              </GradientText>
            </h2>
            <p>Repeat Vibes</p>
          </div>
          <div>
            <h2>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <CountUp
                  from={0}
                  to={200}
                  separator=","
                  direction="up"
                  duration={1}
                  suffix="%"
                  className="count-up-text"
                />
              </GradientText>
            </h2>
            <p>Cities Sippin’</p>
          </div>
          <div>
            <h2>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <CountUp
                  from={0}
                  to={4.5}
                  separator=","
                  direction="up"
                  duration={1}
                  suffix="%"
                  className="count-up-rating"
                />
              </GradientText>
            </h2>
            <p>Avg Rating</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What They Say</h2>
          <div className="testimonial-grid">
            <div className="quote">
              <p>“Tastes like summer in a bottle. No sugar crash!”</p>
              <h4>— Zoya from Pune</h4>
            </div>
            <div className="quote">
              <p>“Best drink to chill after gym. So clean and fresh.”</p>
              <h4>— Om from Delhi</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
