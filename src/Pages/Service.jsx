import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

const Service = () => {
  return (
    <div className="hero-container ">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/10.jpg" title="Service" />
      </div>

      <div className="trip-section section">
        <Trip />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
