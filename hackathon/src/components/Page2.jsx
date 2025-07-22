import React, { use, useEffect, useRef, useState } from "react";
import "../scss/Page 2/Page2.scss";
import man from "../assets/man.webp";
import bamboo from "../assets/bamboo.svg";
import gift from "../assets/giftbox-gift-svgrepo-com.svg";
import truck from "../assets/truck-svgrepo-com.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggering = {
    trigger: ".section-2",
    start: "top 30%",
    end: "bottom 100%",
    scrub: 2,
  };
  useGSAP(() => {
    gsap.from(".oval, .rectangle", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: triggering,
    });

    gsap.from(".imgContainer", {
      transform: "translateX(120%)",
      scale: 0.7,
      opacity: 0,
      duration: 1,
      scrollTrigger: triggering,
    });
  }, []);

  const textRef = useRef(null);

  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollDir, setScrollDir] = useState("down"); // default

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll) {
        setScrollDir("down");
      } else if (currentScroll < prevScroll) {
        setScrollDir("up");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  useEffect(() => {
    // Use scrollDir to control animation
    console.log("Scroll Direction:", scrollDir);

    if (scrollDir === "down") {
      gsap.to;
    }
  }, [scrollDir]);

  useEffect(() => {
    const originalText = textRef.current.innerText;
    textRef.current.innerHTML = ""; // Clear original text

    originalText.split("").forEach((char) => {
      const span = document.createElement("span");

      if (char === " ") {
        span.innerHTML = "&nbsp;"; // Add space correctly
        span.style.display = "inline"; // Let spaces behave naturally
      } else {
        span.innerText = char;
        span.style.display = "inline-block";
        span.style.transition = "transform 0.3s ease";

        span.addEventListener("mouseenter", () => {
          gsap.to(span, {
            scale: 1.3,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });
        });
      }

      textRef.current.appendChild(span);
    });
  }, []);

  useEffect(() => {
    gsap.killTweensOf(".marquee"); // Stop previous animation
    gsap.to(".marquee", {
      x: scrollDir === "up" ? "-100%" : "100%",
      repeat: -1,
      ease: "none",
      duration: 20,
    });
  }, [scrollDir]);

  return (
    <div className="section-2">
      <div className="content1">
        <div className="textContainer">
          <h1 ref={textRef}>Why do people use CBD?</h1>
          <div className="designElementContainer">
            <div className="rectangle">
              <h1>
                improves <br /> emotional state
              </h1>
            </div>
            <div className="oval" id="oval1">
              <h1>
                normalizes <br /> sleep
              </h1>
            </div>
            <div className="oval" id="oval2">
              <h1>
                reduces blood <br /> pressure
              </h1>
            </div>
            <div className="oval" id="oval3">
              <h1>
                boosts <br /> immunity
              </h1>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="content2">
        <div className="marquee">
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
          <h1>Orgainic</h1>
          <div className="svgContainer">
            <img src={bamboo} alt="" />
          </div>
          <h1>Stylish design</h1>
          <div className="svgContainer">
            <img src={gift} alt="" />
          </div>
          <h1>Free world-wide shipping</h1>
          <div className="svgContainer">
            <img src={truck} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page2;
