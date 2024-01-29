import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import Plan from "./components/plan";
import Room from "./components/room";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Room />
      <Footer />
    </div>
  );
}

export default App;
