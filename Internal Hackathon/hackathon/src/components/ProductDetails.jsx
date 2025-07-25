import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../scss/ProductDetails/ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

  const selectedProduct = product.find((p) => p._id === id);

  if (!selectedProduct) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-model">
          <img src={selectedProduct.image_URL} alt={selectedProduct.name} />
        </div>

        <div className="product-info">
          <h1>{selectedProduct.name}</h1>
          <p className="description">{selectedProduct.description}</p>

          <div className="details">
            <p>
              <strong>CBD Content:</strong> {selectedProduct.cbd_content}
            </p>
            <p>
              <strong>Volume:</strong> {selectedProduct.volume}
            </p>
            <p>
              <strong>Flavor:</strong> {selectedProduct.flavor}
            </p>
          </div>

          <button className="add-to-cart">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
