import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const OrdersRow = ({ order, handleDelete, handleStatusUpdated }) => {
  const {
    status,
    service,
    message,
    serviceName,
    customer,
    price,
    phone,
    _id,
    email,
  } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrderService(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [service]);
  //eita orders e nibo karon  parents holo order r props kore pathebo event handler ke
  //   const handleDelete = (id) => {
  //     fetch(`http://localhost:5000/orders/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           toast.success(data.message);
  //           setRefresh(!refresh);
  //         } else {
  //           toast.error(data.error);
  //         }
  //       })
  //       .catch((err) => toast.error(err.message));
  //   };

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            delete
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleStatusUpdated(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
