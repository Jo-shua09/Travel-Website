import "./Trip.css";
import "./Destination.css";
import TripData from "./TripData";

const Trip = () => {
  return (
    <div className="trip-container destination-container">
      <h1>recent trips</h1>
      <p>You can discover unique destinations using google maps.</p>

      <div className="trip-desc">
        <TripData
          imageOne="/assets/5.jpg"
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam ab aspernatur repellat harum! Non animi odit unde esse culpa totam, necessitatibus repellendus ad perspiciatis."
          imageTwo="/assets/8.jpg"
          headingTwo="Trip in malaysia"
          textTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam ab aspernatur repellat harum! Non animi odit unde esse culpa totam, necessitatibus repellendus ad perspiciatis."
          imageThree="/assets/6.jpg"
          headingThree="Trip in france"
          textThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam ab aspernatur repellat harum! Non animi odit unde esse culpa totam, necessitatibus repellendus ad perspiciatis."
        />
      </div>
    </div>
  );
};

export default Trip;
