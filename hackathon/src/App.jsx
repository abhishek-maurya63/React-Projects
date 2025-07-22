import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Nav from "./components/Nav";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Page3 from "./components/Page3";
import ProductDetails from "./components/ProductDetails";
// import About from "./components/About";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const page1Ref = React.useRef(null);
  const page2Ref = React.useRef(null);
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
  });
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <Nav />
      <main className="flex flex-col items-center justify-start w-full flex-1 overflow-x-hidden">
        <div ref={page1Ref}>
          <Page1 />
        </div>
        <div>
          <Page2 />
        </div>
        <div>
          <Page3 />
        </div>
        <div>
          <ProductDetails />
        </div>
        <div>{/* <About /> */}</div>
      </main>
    </div>
  );
};

export default App;
