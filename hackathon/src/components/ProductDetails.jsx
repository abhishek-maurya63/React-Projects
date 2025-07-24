import React from "react";
import can from "../assets/can.webp";
import "../scss/ProductDetails/ProductDetails.scss";

const ProductDetails = () => {
  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-model">
          <img src={can} alt="" />
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
