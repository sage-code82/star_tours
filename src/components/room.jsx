import React from "react";
import { useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const Room = () => {
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
    <div className="max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl font-bold">Rooms fit for the Emperor</h3>
        <p className="pt-4 aurebesh-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam
          incidunt ut! Officia dicta sed voluptates ducimus dignissimos
          repellendus. Ut dolore cum earum recusandae vero doloremque rem nemo.
          Numquam beatae maiores officiis alias consequatur. Quaerat amet alias
          deleniti consequuntur eius consectetur possimus praesentium nobis
          repellat repellendus facere, libero expedita aliquid.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2"
          src="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/04/12231044/Tatooine-house-body-image-1.png"
          alt="Tatooine House"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://i.insider.com/59c3c7e459d82e21008b4c2f?width=1000&format=jpeg&auto=webp"
          alt="Endor Room"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b514e3cf-d394-43fb-be65-1711518576b6/dfry928-95cf57f4-f07b-40e9-a93a-904c6077e7cc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I1MTRlM2NmLWQzOTQtNDNmYi1iZTY1LTE3MTE1MTg1NzZiNlwvZGZyeTkyOC05NWNmNTdmNC1mMDdiLTQwZTktYTkzYS05MDRjNjA3N2U3Y2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OJu0J47A59pABD1FIguFQGvMYFU7FPfUa4zW3d-4rt4"
          alt="Coresaunt Room"
        />
      </div>
    </div>
  );
};

export default Room;
