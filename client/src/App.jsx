import React from "react";
import { Link } from "react-router-dom";

// components
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";

import data from "./data.json";

const App = () => {
  const [state, setState] = React.useState({
    products: data.products,
    size: "",
    sort: "",
  });

  const sortProductsHandler = (e) => {
    const sort = e.target.value;
    setState({
      sort,
      products: state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    });
  };

  const filterProductsHandler = (e) => {
    if (e.target.value === "") {
      setState({
        size: e.target.value,
        products: data.products,
      });
    } else {
      setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  return (
    <div className="grid-container">
      <header>
        <Link to="/">React Shopping Cart</Link>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProductsHandler={filterProductsHandler}
              sortProductsHandler={sortProductsHandler}
            />
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
