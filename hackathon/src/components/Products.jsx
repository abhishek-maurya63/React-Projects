import "../scss/Products/Products.scss";
import can from "../assets/can.webp";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import Magnet from "../react bits/Magnet";

const Products = () => {
  const navigate = useNavigate();
  const [centerIndex, setCenterIndex] = useState(3);
  const productsRef = useRef([]);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const handlePurchase = () => {
    navigate("/products/details/:productId");
  };

  gsap.registerPlugin(ScrollTrigger);

  const scrollThreshold = 50;
  const spacingVW = 25;
  const blurMultiplier = 1.5;

  const applyProductPosition = (center) => {
    const prods = productsRef.current;
    const totalVisible = 5;
    const half = Math.floor(totalVisible / 2);

    prods.forEach((el, i) => {
      const distance = i - center;
      const absDistance = Math.abs(distance);

      if (absDistance > half) {
        gsap.to(el, {
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.5,
          filter: "blur(6px)",
          zIndex: 0,
          duration: 0.5,
          ease: "power3.out",
        });
        return;
      }

      const offsetX = distance * spacingVW;
      const scale = 1 - absDistance * 0.2;
      const blur = `blur(${absDistance * blurMultiplier}px)`;
      const opacity = distance === 0 ? 1 : 0.6 - absDistance * 0.1;
      const zIndex = 100 - absDistance;

      gsap.to(el, {
        x: `${offsetX}vw`,
        y: "0%",
        scale,
        opacity,
        zIndex,
        filter: blur,
        xPercent: -50,
        yPercent: -50,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  };

  useGSAP(() => {
    let typed;
    gsap.from(".section-3", { scale: 0.8 });
    gsap.from(".textContainer", {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 1,
    });

    typed = new Typed(".text", {
      strings: [
        "This is: Mango madness.",
        "This is: Apple charge.",
        "This is: Blackberry bliss.",
        "This is: Liquid freedom.",
      ],
      typeSpeed: 110,
      backSpeed: 50,
      loop: true,
    });

    setTimeout(() => applyProductPosition(centerIndex), 500);

    return () => typed?.destroy();
  }, []);

  const handleWheel = (e) => {
    if (isScrolling.current) return;

    const deltaY = e.deltaY;
    if (Math.abs(deltaY) < scrollThreshold) return;

    const totalProducts = productsRef.current.length;
    const newIndex =
      deltaY > 0
        ? Math.min(centerIndex + 1, totalProducts - 1)
        : Math.max(centerIndex - 1, 0);

    if (newIndex !== centerIndex) {
      setCenterIndex(newIndex);
      applyProductPosition(newIndex);

      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [centerIndex]);

  const productList = Array(7).fill(can);

  return (
    <section className="section-3" ref={containerRef}>
      <div className="textContainer">
        <span className="text"></span>
      </div>
      <div className="product">
        {productList.map((img, i) => (
          <div
            key={i}
            className={`prod prod-${i + 1}`}
            ref={(el) => (productsRef.current[i] = el)}
          >
            <img src={img} alt={`can-${i}`} />
          </div>
        ))}
      </div>
      <div className="cta">
        <Magnet padding={2000} disabled={false} magnetStrength={50}>
          <h1 className="buy" onClick={handlePurchase}>
            Purchase
          </h1>
        </Magnet>
      </div>
    </section>
  );
};

export default Products;
