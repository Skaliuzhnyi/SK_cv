import { useRef, useEffect} from 'react';
import Waypoint from 'waypoints.js';

function Skills() {

  useEffect(()=>{setTimeout(function () {
    const el = document.querySelector('.skills-content');
    new Waypoint({
      element: el,
      offset: '80%',
      handler: function (direction) {
        let progress = document.querySelector('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      },
    });
  }, 200)},[])

  return (
    <div className="row skills-content">
      <div
        className="col-lg-6"
        data-aos="fade-up"
      >
        <div className="progress">
          <span className="skill">
            HTML <i className="val">100%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            CSS <i className="val">90%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            JavaScript <i className="val">75%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="progress">
          <span className="skill">
            WordPress/CMS <i className="val">70%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            Photoshop <i className="val">55%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            FIGMA <i className="val">80%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
