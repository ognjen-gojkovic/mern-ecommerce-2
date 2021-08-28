import React from "react";

import "./HomeScreen.css";

// components
import Cart from "../../components/cart/Cart";
import Filter from "../../components/filter/Filter";
import Products from "../../components/products/Products";

const HomeScreen = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Filter />
          <Products />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
