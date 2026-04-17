import courtyard from '../assets/Rectangle 19.png';

function SustainabilitySection() {
  return (
    <section className="sustainability">
      <div className="section sustainability-grid">
        <div className="sustainability-copy">
          <h3>Heat derived</h3>
          <p>
            We apply bioengineering and sustainable materials to build resilient
            environments that respond to climate, light, and daily movement.
          </p>
          <div className="sustainability-list">
            <div>
              <span>Floor plans</span>
              <span>+</span>
            </div>
            <div>
              <span>Air design</span>
              <span>+</span>
            </div>
            <div>
              <span>Interior design</span>
              <span>+</span>
            </div>
            <div>
              <span>Construction supervision</span>
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="sustainability-media">
          <div className="frame">
            <img src={courtyard} alt="Courtyard" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilitySection;
