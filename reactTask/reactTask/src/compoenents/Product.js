// Product.js
import React from "react";
import { Link } from "react-router-dom";
import "./product.css"; // Import the CSS file for styling

function Product(props) {
  const { product, showButton } = props;

  return (
    <div className="product-card">
      <img src={product.image} className="product-image" alt={product.title} />
      <div className="product-details">
        <h5 className="product-title">{product.title}</h5>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        {showButton && (
          <Link
            className={`product-button ${showButton ? "detail-button" : ""}`}
            to={`/product/${product.id}`}
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
