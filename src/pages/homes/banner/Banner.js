import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full py-10 ">
      {bannerData.map((slider) => (
        <BannerItem key={slider.id} slider={slider}></BannerItem>
      ))}

      {/* <BannerItem image={img1}></BannerItem> */}

      {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"> change korlam button */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img2} alt="" className="w-full" />
        </div>

       
        <div className="absolute flex justify-between transform -translate-y-1/2 left-24  top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br />
            Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4">
          <p className="text-xl text-white w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-3/4">
          <button className="btn btn-success mr-10">Discover More</button>
          <button className="btn btn-outline btn-accent">Latest Project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
