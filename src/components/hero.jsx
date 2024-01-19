import React from "react";
import { useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const Hero = () => {
  useEffect(() => {
    const aurebeshFont = new FontFaceObserver("Aurebesh", {
      weight: "normal",
      style: "normal",
    });

    aurebeshFont.load().then(() => {
      document.documentElement.classList.add("aurebesh-loaded");
    });
  }, []);
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://superman-on-film.com/wp-content/uploads/2018/08/Star-Wars-Tatooine-sunset.jpg"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10] max-w-[1100px]  m-auto absolute p-4">
          <p>Out of This World</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Galactic Exploration and Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl aurebesh-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            maiores repellat consequuntur magnam ex iusto distinctio culpa
            sapiente totam similique.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
