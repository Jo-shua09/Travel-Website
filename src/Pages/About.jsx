import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

const About = () => {
  return (
    <div className="hero-container ">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/night.jpg" title="About" heroBtn="about-hero-btn" />
      </div>

      <div className="about-section section">
        <AboutUs />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default About;
