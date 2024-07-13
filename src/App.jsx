import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import HotDessert from "./components/hotdessert/HotDessert";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popularReciep/Popular";
import Testimonial from "./components/testimonial/Testimonial";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
      <Popular />
      <Testimonial />
      <Footer />
    </div>
  )
}