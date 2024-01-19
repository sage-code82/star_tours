import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import Plan from "./components/plan";
import Room from "./components/room";
import Slider from "./components/slider";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Room />
      <Slider />
    </div>
  );
}

export default App;
