import React from "react";
import { Link } from "react-router-dom";

// components
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <Link to="/">React Shopping Cart</Link>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
};

export default App;
