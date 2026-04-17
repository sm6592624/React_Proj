import villaWide from '../assets/Rectangle 15.png';
import designSketch from '../assets/Rectangle 12.png';
import materialFlatlay from '../assets/Rectangle 12-1.png';
import implementation from '../assets/Rectangle 12-2.png';
import accentLine from '../assets/Layer 2.svg';

function ProcessSteps() {
  return (
    <section className="culture" id="service">
      <div className="section culture-wrap">
        <div className="culture-header">
          <p className="culture-kicker">Projection 2022 edition</p>
          <h2>
            The place where you spend your time is a direct reflection of your
            culture
          </h2>
        </div>
        <div className="culture-image">
          <div className="frame">
            <img src={villaWide} alt="Night villa" />
          </div>
        </div>
        <div className="culture-divider">
          <img src={accentLine} alt="" aria-hidden="true" />
        </div>
        <div className="process" id="process">
          <p className="process-title">Our works goes through three stages</p>
          <div className="process-list">
            <div className="process-row">
              <div className="process-left">
                <span>01</span>
                <h3>Design</h3>
                <button className="process-action" type="button">View Project -&gt;</button>
              </div>
              <div className="process-image">
                <img src={designSketch} alt="Design sketch" />
              </div>
              <p>
                The design stage begins by developing an understanding of our
                client's needs and predispositions in an initial consultation
                with one of our designers.
              </p>
            </div>
            <div className="process-row">
              <div className="process-left">
                <span>02</span>
                <h3>Pricing and Materials Approval</h3>
                <button className="process-action" type="button">View Project -&gt;</button>
              </div>
              <div className="process-image">
                <img src={materialFlatlay} alt="Material palette" />
              </div>
              <p>
                Once all measurements have been calculated and quantities
                estimated, a comprehensive cost analysis is produced, giving
                clients a range of material options commensurate with their
                project and budget.
              </p>
            </div>
            <div className="process-row">
              <div className="process-left">
                <span>03</span>
                <h3>Implementation</h3>
                <button className="process-action" type="button">View Project -&gt;</button>
              </div>
              <div className="process-image">
                <img src={implementation} alt="Implementation" />
              </div>
              <p>
                After our client's approval we finalize the design and take full
                responsibility for implementation and all precise measurements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
