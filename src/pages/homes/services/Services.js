import React, { useEffect, useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import ServiceCard from "./ServiceCard";
// fetch("https://genius-car-server-ten-iota.vercel.app/services")
const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  // console.log(searchRef);
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [isAsc, search]);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  return (
    <div>
      <div className="text-xl mb-4 text-center">
        <p className="text-2xl font-bold text-orange-400">Service</p>
        <h2 className="text-5xl font-semibold ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>

        <input className="input input-sm" ref={searchRef} type="text" />
        <button onClick={handleSearch}>Search</button>
        <button className="btn btn-ghost" onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "desc" : "asc"}
        </button>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3  lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
