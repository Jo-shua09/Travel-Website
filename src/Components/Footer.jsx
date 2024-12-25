import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container section">
      <div className="footer-desc">
        <div className="f-left">
          <h1>Tripps</h1>
          <p>Choose your favourite destination </p>
        </div>
        <div className="f-right">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-behance"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="footer-links">
        <div className="f-links">
          <h3>project</h3>
          <a href="/">changelog</a>
          <a href="/">status</a>
          <a href="/">license</a>
          <a href="/">all versions</a>
        </div>

        <div className="f-links">
          <h3>community</h3>
          <a href="/">github</a>
          <a href="/">issues</a>
          <a href="/">projects</a>
          <a href="/">twitter</a>
        </div>

        <div className="f-links">
          <h3>help</h3>
          <a href="/">support</a>
          <a href="/">troubleshooting</a>
          <a href="/">contact us</a>
        </div>

        <div className="f-links">
          <h3>others</h3>
          <a href="/">terms of service</a>
          <a href="/">privacy policy</a>
          <a href="/">license</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
