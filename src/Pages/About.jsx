import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div className="hero-container ">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/night.jpg" title="About" heroBtn="about-hero-btn" />
      </div>
    </div>
  );
};

export default About;
