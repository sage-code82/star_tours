import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import Plan from "./components/plan";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
    </div>
  );
}

export default App;
