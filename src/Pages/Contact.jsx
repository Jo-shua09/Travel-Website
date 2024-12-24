import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div className="hero-container ">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/2.jpg" title="Contact" />
      </div>
    </div>
  );
};

export default Contact;
