import logoMark from '../assets/Logo 1.png';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logoMark} alt="Studio mark" />
          <p>+1 (323) 555-0987</p>
          <p>hello@studio-arch.com</p>
          <p>402 Studio Avenue, CA</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
        </div>
        <div className="footer-links">
          <h4>Social</h4>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">Instagram</a>
          <a href="https://www.behance.net" rel="noreferrer" target="_blank">Behance</a>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
