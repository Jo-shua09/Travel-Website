import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={props.container}>
      <div className="image">
        <img src={props.heroImg} alt="" />
      </div>
      <div className={props.cName}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url}>
          <button className={props.heroBtn}>{props.btntext}</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
