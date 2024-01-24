import React, { useState } from "react";
import img_a from "../assets/endor.jpg";
import img_b from "../assets/hoth.jpg";
import img_c from "../assets/tatooine.jpg";
import img_d from "../assets/kashyyyk.jpg";
import img_e from "../assets/mustafar.jpg";
import img_f from "../assets/coruscant.jpg";

const Slider = () => {
  const slides = [
    { img: img_a, title: "Endor" },
    { img: img_c, title: "Tatooine" },
    { img: img_b, title: "Hoth" },
    { img: img_d, title: "Kashyyyk" },
    { img: img_e, title: "Mustafar" },
    { img: img_f, title: "Coruscant" },
  ];

  return (
    <div className="container bg-purple-200">
      <div className="fixed flex flex-col gap-12 items-center justify-center h-screen w-[10%]">
        {slides.map((bullet, index) => {
          return (
            <img
              src={bullet.img}
              className={`bullet-${
                index + 1
              }w-12 h-12 rounded-full object-cover`}
            />
          );
        })}
      </div>
      {slides.map((slide) => {
        return (
          <section className="h-screen flex snap-start">
            <div className="w-[35%]">
              <div className="flex leading-8 flex-col items-center justify-center h-full">
                <h2 className="text-2xl">{slide.title}</h2>
              </div>
            </div>
            <div className="w-[65%]"></div>
            <div
              className="mask"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </section>
        );
      })}
    </div>
  );
};

export default Slider;
