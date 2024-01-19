import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const slides = [
    { url: "/endor.jpg", title: "Endor" },
    { url: "/tatooine.jpg", title: "Tatooine" },
    { url: "/hoth.jpg", title: "Hoth" },
    { url: "/kashyyyk.jpg", title: "Kashyyyk" },
    { url: "/mustafar.jpg", title: "Mustafar" },
    { url: "/coruscant.jpg", title: "Coruscant" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-purple-200 max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full bg-center bg-cover rounded-2xl duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={35} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={35} />
      </div>
    </div>
  );
};

export default Slider;
