import disystems1 from './../img/portfolio/10-1_disystems.png';
import disystems2 from './../img/portfolio/10-2_disystems.png';
import disystems3 from './../img/portfolio/10-3_disystems.png';

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
              <li>Disystems Details</li>
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
                      src={disystems1}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={disystems2}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={disystems3}
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
                    <strong>Client</strong>: Disystems
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href="https://disystems.com.ua"
                      target="_blank"
                      rel="noreferrer"
                    >
                      disystems.com.ua
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
