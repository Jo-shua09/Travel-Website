import ContactForm from "../Components/ContactForm";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SignUp = () => {
  return (
    <div className="signUp-container">
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section ">
        <Hero container="container-hero" cName="section name-text" heroImg="/assets/9.jpg" title="Sign Up" />
      </div>

      <div className="contact-section section">
        <ContactForm title="Sign up for an account on Tripps" holder3="Number" textarea="Why pick tripps?" />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
