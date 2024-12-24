import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination-container">
      <h1>popular destination</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>

      <div className="dest-desc">
        <DestinationData
          heading="Taal Volcano, batanges"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi enim consectetur est nulla, sequi tempore reiciendis quidem ratione, neque, voluptatem totam ducimus doloribus labore laboriosam. Quisquam harum fugiat temporibus aliquam dolor quae? Quasi pariatur porro omnis numquam autem explicabo eos architecto delectus possimus tempora! Ad non porro doloremque esse praesentium, dolorem temporibus optio explicabo."
          imageOne="/assets/1.jpg"
          imageTwo="/assets/2.jpg"
          headingTwo="mt. daguldul, batangas"
          textTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi enim consectetur est nulla, sequi tempore reiciendis quidem ratione, neque, voluptatem totam ducimus doloribus labore laboriosam. Quisquam harum fugiat temporibus aliquam dolor quae? Quasi pariatur porro omnis numquam autem explicabo eos architecto delectus possimus tempora! Ad non porro doloremque esse praesentium, dolorem temporibus optio explicabo."
          imageThree="/assets/5.jpg"
          imageFour="/assets/8.jpg"
        />
      </div>
    </div>
  );
};

export default Destination;
