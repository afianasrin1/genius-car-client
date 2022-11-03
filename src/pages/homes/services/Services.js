import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        } else {
          // toast.error(data.error);
        }
      })
      .catch((error) => {
        //  toast.error(error.message)
      });
  }, []);
  return (
    <div>
      <div className="text-     mb-4">
        <p className="text-2xl font-bold text-orange-400">Service</p>
        <h2 className="text-5xl font-semibold ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
