import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import Plan from "./components/plan";
import Room from "./components/room";
import Slider from "./components/slider";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Room />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
