import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-awesome-reveal";

const Clients = () => {
  const slides = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto" id="clients">
      <Slide direction="left">
        <span className="green text-gray-200 text-xl font-bold">
          Clients
        </span>
        <h1 className="text-gray-200 pt-0 mb-2">Featured Brands</h1>
      </Slide>
      <Slider {...settings} className="overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className="h-16 w-32">
            <img
              className="object-contain h-full w-full"
              src={slide}
              alt={`Client ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
