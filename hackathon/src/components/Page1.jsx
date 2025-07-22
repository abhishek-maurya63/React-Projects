import React from "react";
import can from "../assets/can.webp";
import burst from "../assets/burst.svg";
import { useGSAP } from "@gsap/react";
import "../scss/Page 1/Page1.scss";
import gsap from "gsap";
import eye from "../assets/eye1.png";

const Page1 = () => {
  useGSAP(() => {
    gsap.to(".burst", { rotate: 360, duration: 5, repeat: -1, ease: "linear" });
    gsap.to(".can", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="hero-section">
      <h1 className="chill">chill</h1>
      <h1 className="fun">fun</h1>
      <h1 className="and">&</h1>
      <img className="eye" src={eye} alt="" />

      <div className="hero-content">
        <img className="burst" src={burst} alt="Burst" />
        <img className="can" src={can} alt="Can" loading="lazy" />
      </div>
    </div>
  );
};

export default Page1;
