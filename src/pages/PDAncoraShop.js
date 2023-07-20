import ancoraShop1 from './../img/portfolio/9-1_ancora-shop.png';
import ancoraShop2 from './../img/portfolio/9-2_ancora-shop.png';
import ancoraShop3 from './../img/portfolio/9-3_ancora-shop.png';

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
              <li>Ancora shop Details</li>
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
                      src={ancoraShop1}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={ancoraShop2}
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={ancoraShop3}
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
                    <strong>Client</strong>: Construction company
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href="https://skaliuzhnyi.github.io/ancora__shop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      skaliuzhnyi.github.io/ancora__shop
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
