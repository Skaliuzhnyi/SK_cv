import servicelux1 from './../img/portfolio/12-1_service-lux.png';
import servicelux2 from './../img/portfolio/12-2_service-lux.png';
import servicelux3 from './../img/portfolio/12-3_service-lux.png';

import { NavLink } from 'react-router-dom';

function PDAncoraPromo() {
  return (
    <main id="main">
      <section
        id="breadcrumbs"
        className="breadcrumbs"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Project Details</h2>
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Service-lux Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section
        id="portfolio-details"
        className="portfolio-details"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img
                      src={servicelux1}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={servicelux2}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={servicelux3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web development
                  </li>
                  <li>
                    <strong>Client</strong>: Transportation company
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href="https://service-lux.com.ua"
                      target="_blank"
                      rel="noreferrer"
                    >
                      service-lux.com.ua
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PDAncoraPromo;
