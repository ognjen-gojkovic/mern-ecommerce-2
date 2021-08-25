import React from "react";
import { Link } from "react-router-dom";
import Products from "./components/products/Products";

import data from "./data.json";

const App = () => {
  const [state, setState] = React.useState({
    products: data.products,
  });
  return (
    <div className="grid-container">
      <header>
        <Link to="/">React Shopping Cart</Link>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={state.products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
};

export default App;
