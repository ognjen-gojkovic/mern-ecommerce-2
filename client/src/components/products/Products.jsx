import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <Link to={`#${product._id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </Link>
              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button className="button primary">Add to Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
