import statue from '../assets/Rectangle 18.png';
import collage from '../assets/Group 17.png';
import gate from '../assets/Image Card-1.png';
import horses from '../assets/Big Image Card.png';

function MissionStatement() {
  return (
    <section className="mission" id="team">
      <div className="section mission-grid">
        <div className="mission-copy">
          <h2>One step towards your dream home</h2>
          <p>Challenging ourselves in every project.</p>
          <p className="mission-note">
            Architecture should hold memory and be built with empathy for
            everyday ritual and rhythm.
          </p>
          <img className="mission-statue" src={statue} alt="Classical statue" />
        </div>
        <div className="mission-media">
          <img className="mission-main" src={collage} alt="Project collage" />
          <img className="mission-overlay" src={gate} alt="Garden gate" />
          <img className="mission-overlay secondary" src={horses} alt="Sculpture group" />
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;
