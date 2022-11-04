import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure,you want to cancel this order "
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            //refresh name state declare na kore filter calailam ta reload dite hobe na
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };
  const handleStatusUpdated = (id) => {
    const proceed = window.confirm(
      "are you sure,you want to update this order "
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Changed" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = orders.filter((order) => order._id !== id);
              const changing = orders.find((order) => order._id === id);
              changing.status = "Changed";

              const newOrders = [changing, ...remaining];
              setOrders(newOrders);
            }
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div>
      <h2 className="5xl">your order:::::{orders.length} orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdated={handleStatusUpdated}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
