import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { formatCurrency } from "../../utils";
import { removeFromCart } from "../../redux/actions/actions.cart";
import {
  createOrderFetch,
  clearOrder,
} from "../../redux/actions/actions.order";

import "./Cart.css";
import "./Checkout.css";
import "./OrderDetails.css";

const Cart = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.reducerCart);
  const reduxOrder = useSelector((state) => state.reducerOrder);

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
      total: reduxState.cartItems
        .reduce((a, c) => a + c.price * c.count, 0)
        .toFixed(2),
    };
    dispatch(createOrderFetch(order));
  };

  const closeModal = () => {
    dispatch(clearOrder());
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

      {reduxOrder.order && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={() => closeModal()}>
              X
            </button>
            <div className="order-details">
              <h3 className="success-message">Your order has been placed.</h3>
              <h2>Order: {reduxOrder.order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{reduxOrder.order.name}</div>
                </li>
                <li>
                  <div>Email:</div>
                  <div>{reduxOrder.order.email}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{reduxOrder.order.address}</div>
                </li>
                <li>
                  <div>Date:</div>
                  <div>{reduxOrder.order.createdAt}</div>
                </li>
                <li>
                  <div>Total:</div>
                  <div>{formatCurrency(reduxOrder.order.total)}</div>
                </li>
                <li>
                  <div>Ordered products:</div>
                  <div>
                    {reduxOrder.order.cartItems.map((x) => {
                      return (
                        <div key={x.title}>{x.count + " x " + x.title}</div>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
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
                  <form
                    onSubmit={(e) => {
                      createOrder(e);
                      setState({
                        ...state,
                        showCheckout: false,
                      });
                    }}
                  >
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
