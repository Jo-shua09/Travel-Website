import "./ContactForm.css";

const ContactForm = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>{props.title}</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder={props.holder3} />
          <textarea name="text" placeholder={props.textarea}></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
