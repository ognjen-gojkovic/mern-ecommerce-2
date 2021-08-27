import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils";
import { fetchProducts } from "../../redux/actions/actions.products";

import "./Products.css";
import "./ProductDetails.css";

const Products = ({ products, addToCartHandler }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.reducerProducts);

  const [state, setState] = React.useState({
    product: null,
  });

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const openModal = (product) => {
    setState({ product });
  };

  const closeModal = () => {
    setState({ product: null });
  };

  console.log(reduxState);
  return (
    <div>
      {reduxState.loading && <h2>Loading...</h2>}
      <Fade bottom cascade>
        <ul className="products">
          {reduxState.filteredProducts.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={`#${product._id}`} onClick={() => openModal(product)}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </Link>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
      {state.product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
            <div className="product-details">
              <img src={state.product.image} alt={state.product.title} />
              <div className="product-details-description">
                <p>
                  <strong>{state.product.title}</strong>
                </p>
                <p>{state.product.description}</p>
                <p>
                  Avaiable Sizes
                  {state.product.availableSizes.map((x) => (
                    <span>
                      {" "}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(state.product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      addToCartHandler(state.product);
                      closeModal();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div>Modal</div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
