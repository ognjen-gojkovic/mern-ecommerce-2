import React from "react";
import { Link, Switch, Route } from "react-router-dom";

// components
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import AdminScreen from "./screens/adminScreen/AdminScreen";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <Link to="/">React Shopping Cart</Link>
        <Link to="/admin">Admin</Link>
      </header>
      <main>
        <Switch>
          <Route path="/admin" component={AdminScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
};

export default App;
