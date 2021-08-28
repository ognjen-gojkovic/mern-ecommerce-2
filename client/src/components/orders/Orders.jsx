import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/actions/actions.order";
import { formatCurrency } from "../../utils";
import "./Orders.css";

const Orders = () => {
  const dispatch = useDispatch();
  const reduxOrders = useSelector((state) => state.reducerOrder);

  React.useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      {!reduxOrders.orders ? (
        <h2>Loading...</h2>
      ) : (
        <div className="orders">
          <h2>Orders:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>ITEMS</th>
              </tr>
            </thead>
            <tbody>
              {reduxOrders.orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{formatCurrency(order.total)}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.cartItems.map((item) => (
                      <div key={item.title}>
                        {item.count} {" x "} {item.title}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
