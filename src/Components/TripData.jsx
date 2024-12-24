import "./Trip.css";

const TripData = (props) => {
  return (
    <div className="trip-desc">
      <div className="trip-one">
        <div className="trip-image">
          <img src={props.imageOne} alt="" />
        </div>
        <div className="trip-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
      </div>

      <div className="trip-one">
        <div className="trip-image">
          <img src={props.imageTwo} alt="" />
        </div>
        <div className="trip-text">
          <h2>{props.headingTwo}</h2>
          <p>{props.textTwo}</p>
        </div>
      </div>

      <div className="trip-one">
        <div className="trip-image">
          <img src={props.imageThree} alt="" />
        </div>
        <div className="trip-text">
          <h2>{props.headingThree}</h2>
          <p>{props.textThree}</p>
        </div>
      </div>
    </div>
  );
};

export default TripData;
