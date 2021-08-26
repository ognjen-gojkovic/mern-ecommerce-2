import React from "react";
import { Link } from "react-router-dom";

import data from "./data.json";

// components
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  const [state, setState] = React.useState({
    products: data.products,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    size: "",
    sort: "",
  });

  const sortProductsHandler = (e) => {
    const sort = e.target.value;
    setState({
      ...state,
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
        ...state,
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

  const removeFromCart = (product) => {
    const cartItems = state.cartItems.slice();
    const newItems = cartItems.filter((x) => x._id !== product._id);
    setState({
      ...state,
      cartItems: newItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const addToCart = (product) => {
    let alreadyInCart = false;

    const cartItems = state.cartItems.slice();

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setState({ ...state, cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const createOrderHandler = (order) => {
    alert("Need to save order for " + order.name);
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
            <Products products={state.products} addToCartHandler={addToCart} />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={state.cartItems}
              removeFromCart={removeFromCart}
              createOrderHandler={createOrderHandler}
            />
          </div>
        </div>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
};

export default App;
