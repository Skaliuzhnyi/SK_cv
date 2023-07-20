import fla1 from './../img/portfolio/2-1_fla.png';
import fla2 from './../img/portfolio/2-2_fla.png';
import fla3 from './../img/portfolio/2-3_fla.png';

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
              <li>FLA Details</li>
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
                      src={fla1}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={fla2}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={fla3}
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
                    <strong>Client</strong>: Femida Legal Association
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href="https://skaliuzhnyi.github.io/fla"
                      target="_blank"
                      rel="noreferrer"
                    >
                      skaliuzhnyi.github.io/fla
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
