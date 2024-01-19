import { useEffect } from "react";
import React from "react";
import FontFaceObserver from "fontfaceobserver";

const Plan = () => {
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
    <div className="max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 bg-purple-200">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://lumiere-a.akamaihd.net/v1/images/databank_ewokvillage_01_169_e8ae9721.jpeg?region=62%2C0%2C1498%2C843"
          alt="Bright-Tree Village"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9irlgln2702raova00it7ia/public"
          alt="Hoth"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://i.pinimg.com/originals/e0/65/23/e0652320fe1c118a1a1820f826a797af.jpg"
          alt="Kashyyyk"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://www.vacationer.travel/wp-content/uploads/2022/05/naboohed.jpg"
          alt="Naboo"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://wallpapers.com/images/hd/scarif-1920-x-1080-wallpaper-1j2bgccy64b1ntru.jpg"
          alt="Scarif"
        />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6 aurebesh-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          aut.
        </p>
        <p className="pb-6 aurebesh-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ratione nisi minus saepe quasi, deleniti molestiae similique? Id
          perspiciatis est molestiae numquam amet recusandae minus, cupiditate
          quas aperiam sed aspernatur maiores cum rem doloribus eius deleniti
          tempore nemo ratione non distinctio? Dicta vitae odit asperiores quod.
          Eaque quisquam facilis cumque?
        </p>

        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
