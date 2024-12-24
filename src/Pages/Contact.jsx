import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div className="hero-container ">
      <div className="hero-section ">
        <Navbar />
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/2.jpg" title="Contact" />
      </div>
    </div>
  );
};

export default Contact;
