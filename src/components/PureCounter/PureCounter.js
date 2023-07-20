import PureCounter from '@srexi/purecounterjs';

function PureCounters() {
  new PureCounter();

  return ( 
          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="41"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong>
                </p>
              </div>
            </div>
          </div>
  );
}

export default PureCounters;