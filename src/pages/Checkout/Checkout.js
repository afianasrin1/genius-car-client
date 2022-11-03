import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData().data;
  const { user } = useContext(AuthContext);
  const handlePlaceholder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.FirstName.value} ${form.LastName.value}`;

    const email = user?.email || "UnRegistered";
    const phone = form.phone.value;
    const message = form.message.value;
    //jodi validate dite cai
    if (phone.length < 11) {
      toast.error("phone number are  less than 11 character");
    }

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        " content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.success) {
        //   toast.success(data.message);
        //   form.reset();
        // } else {
        //   toast.error(data.error);
        // }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handlePlaceholder} className="mx-10 my-10 ">
        <h2 className="text-3xl"> you are about to order:{title}</h2>
        <h4 className="text-2xl"> price:${price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            name="FirstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="LastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-info w-full "
          />
        </div>
        <br />
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          required
        ></textarea>
        <input className="btn" type="submit" value="place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
