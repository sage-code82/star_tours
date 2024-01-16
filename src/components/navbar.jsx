import React from "react";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <TiThMenuOutline
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={30}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-yellow-400 left-0 top-0 w-full- h-screen bg-black/70 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-4xl p-8">Home</li>
          <li className="font-bold text-4xl p-8">Destinations</li>
          <li className="font-bold text-4xl p-8">Reservations</li>
          <li className="font-bold text-4xl p-8">Amenities</li>
          <li className="font-bold text-4xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
