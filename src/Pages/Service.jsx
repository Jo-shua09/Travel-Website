import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Service = () => {
  return (
    <div className="hero-container ">
      <div className="hero-section ">
        <Navbar />
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/night.jpg" title="Service" />
      </div>
    </div>
  );
};

export default Service;
