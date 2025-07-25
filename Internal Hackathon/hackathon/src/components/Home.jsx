import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const page1Ref = React.useRef(null);
  //   const page2Ref = React.useRef(null);
  useGSAP(() => {
    gsap.to(page1Ref.current, {
      scale: 0.8,
      opacity: 5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: page1Ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <div ref={page1Ref}>
        <Page1 />
      </div>
      <div>
        <Page2 />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
