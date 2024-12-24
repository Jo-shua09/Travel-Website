import "./Destination.css";

const DestinationData = (props) => {
  return (
    <div className="destination-container">
      <div className="dest-desc">
        <div className="dest-one">
          <div className="dest-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </div>

          <div className="dest-images">
            <img src={props.imageOne} alt="" />
            <img src={props.imageTwo} alt="" />
          </div>
        </div>

        <div className="dest-one">
          <div className="dest-images">
            <img src={props.imageThree} alt="" />
            <img src={props.imageFour} alt="" />
          </div>

          <div className="dest-text">
            <h2>{props.headingTwo}</h2>
            <p>{props.textTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
