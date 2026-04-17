import Header from './Header';
import heroMain from '../assets/Image Card.png';
import heroSide from '../assets/Group 8.png';
import ctaIcon from '../assets/Group 6.svg';
import pillButton from '../assets/Button.svg';

function HeroSection() {
  return (
    <section className="hero" id="about">
      <div className="section hero-wrap">
        <Header />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Archi Vision Studio</p>
            <h1>Our Implicit Belief in Architecture&apos;s Dynamism</h1>
            <p className="hero-subtitle">
              We shape residential, commercial, and cultural spaces through
              a balance of clarity, craftsmanship, and contemporary detail.
            </p>
            <div className="hero-actions">
              <button className="cta-button" type="button">
                <span>Register your interest</span>
                <img src={ctaIcon} alt="" aria-hidden="true" />
              </button>
              <img className="hero-pill" src={pillButton} alt="" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image-frame">
              <img src={heroMain} alt="Modern villa" />
            </div>
            <div className="hero-card">
              <p>
                Decorations and finishes of ideas in all interior and exterior
                implementation.
              </p>
              <p className="hero-card-accent">
                To achieve uniqueness in all that we do, adding elements of
                nature.
              </p>
              <img src={heroSide} alt="Architectural detail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
