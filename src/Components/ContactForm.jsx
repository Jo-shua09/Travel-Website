import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Send a message to us!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="text" placeholder="Message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
