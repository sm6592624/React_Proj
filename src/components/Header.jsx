import logoMark from '../assets/Logo 1.png';

function Header() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <img src={logoMark} alt="Brand logo" />
      </div>
      <nav className="site-nav">
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
