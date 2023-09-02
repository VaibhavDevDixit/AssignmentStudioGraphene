import React, { useEffect, useState } from "react";
import "../Desktop1.css";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        // Filter products based on the selected category
        const filteredProducts = data.filter((product) => product.category === selectedCategory);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedCategory]);

  return (
    <div
      className="container"
      style={{ paddingTop: 950 + "px", paddingLeft: 300 + "px" }}
    >
      <div className="d-flex overflow-auto">
        {products.map((product) => (
          <div
            className="mb-4 me-3"
            key={product.id}
            style={{ flex: "0 0 auto", width: "18rem" }}
          >
            <div className="card">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top custom-image-size"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{truncateText(product.description, 200)}</p>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
