import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsFetch,
  sortProductsFetch,
} from "../../redux/actions/actions.products";
import "./Filter.css";

const Filter = ({ sort, size }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.reducerProducts);

  return !reduxState.filteredProducts ? (
    <h2>Loading...</h2>
  ) : (
    <div className="filter">
      <div className="filter-result">
        {reduxState.filteredProducts.length} Products
      </div>
      <div className="filter-sort">
        Order:
        <select
          value={sort}
          onChange={(e) =>
            dispatch(
              sortProductsFetch(reduxState.filteredProducts, e.target.value)
            )
          }
        >
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter:
        <select
          value={size}
          onChange={(e) =>
            dispatch(filterProductsFetch(reduxState.products, e.target.value))
          }
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
