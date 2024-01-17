import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
    </div>
  );
}

export default App;
