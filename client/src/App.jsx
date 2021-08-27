import React from "react";
import { Link } from "react-router-dom";

// components
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  const [state, setState] = React.useState({
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  });

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
            <Filter />
            <Products addToCartHandler={addToCart} />
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
