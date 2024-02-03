import React from "react";
import "./productsGrid.scss"; // Import the SCSS file

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-cell" key={product.id}>
          <img src={product.thumbnail} alt={product.name} />

          <div className="product-info">
            <div className="info-row">{product.name}</div>
            <div className="info-row">{product.category}</div>
            <div className="info-row price-row">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
