import React from "react";
import can from "../assets/can.webp";
import "../scss/ProductDetails/ProductDetails.scss";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanModel from "./canModel";
import { Suspense } from "react";

const ProductDetails = () => {
  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-model">
          <Canvas className="canModel" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <CanModel />
            </Suspense>
            <OrbitControls
              enableRotate={true}
              enableZoom={true}
              minDistance={5}
              maxDistance={6}
              minPolarAngle={Math.PI / 2.3}
              maxPolarAngle={Math.PI / 3}
              enablePan={false}
            />
          </Canvas>
        </div>

        <div className="product-info">
          <h1>CBD Lemonade</h1>
          <p className="description">
            Our CBD Lemonade offers a refreshing twist on a classic, combining
            the tangy taste of lemonade with the calming effects of CBD. Perfect
            for a relaxing afternoon or a post-workout recovery.
          </p>

          <div className="details">
            <p>
              <strong>CBD Content:</strong> 25mg
            </p>
            <p>
              <strong>Volume:</strong> 12 fl oz (355ml)
            </p>
            <p>
              <strong>Flavor:</strong> Lemonade
            </p>
          </div>

          <button className="add-to-cart">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
