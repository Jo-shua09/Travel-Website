import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="home-container ">
      <div className="hero-section ">
        <Navbar />
        <Hero
          container="hero-container"
          cName="hero-text section"
          heroImg="/assets/12.jpg"
          title="Your journey your story"
          text="choose your favourite destination"
          heroBtn="hero-btn"
          url="/"
          btntext="travel plan"
        />
      </div>
    </div>
  );
};

export default Home;
