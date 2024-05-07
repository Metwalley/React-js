//file name = ProductsList.js
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsList.css"; // Import the CSS file for styling

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        // Sort products by price (ascending) - Change sorting criteria as needed
        const sortedProducts = data.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      });
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="product-buttons-container">
          <button
            onClick={() => {
              getProducts();
            }}
            className="product-button"
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
              className="product-button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
