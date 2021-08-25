import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <Link to="/">React Shopping Cart</Link>
      </header>
      <main>Product List</main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
};

export default App;
