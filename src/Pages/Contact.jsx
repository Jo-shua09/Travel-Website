import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className="hero-container ">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/2.jpg" title="Contact" />
      </div>

      <div className="contact-section section">
        <ContactForm title="Send a message to us!" holder3="Subject" textarea="message" />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
