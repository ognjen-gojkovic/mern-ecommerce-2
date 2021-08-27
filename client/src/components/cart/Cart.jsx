import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { formatCurrency } from "../../utils";
import { removeFromCart } from "../../redux/actions/actions.cart";

import "./Cart.css";
import "./Checkout.css";

const Cart = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.reducerCart);

  const [state, setState] = React.useState({
    showCheckout: false,
    name: "",
    email: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const createOrder = (e) => {
    e.preventDefault();

    const order = {
      name: state.name,
      email: state.email,
      address: state.address,
      cartItems: reduxState.cartItems,
    };
  };

  return (
    <div>
      {reduxState.cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {reduxState.cartItems.length} in the cart.
        </div>
      )}
      <div>
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-items">
              {reduxState.cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)}x{item.count}{" "}
                      <button
                        className="button"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        {reduxState.cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    reduxState.cartItems.reduce(
                      (qty, item) => item.price * item.count + qty,
                      0
                    )
                  )}
                </div>
                <button
                  onClick={() => {
                    setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>

            {state.showCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <form onSubmit={createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={handleInput}
                        />
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={handleInput}
                        />
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={handleInput}
                        />
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
