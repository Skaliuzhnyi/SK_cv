import { NavLink, useParams } from 'react-router-dom';

import { projects } from './../helpers/progectList';

function PortfolioDetails() {
  const { href } = useParams();

  const project = projects[href];

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
              <li>{project.title}</li>
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
                      src={project.img1}
                      alt={project.alt}
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={project.img2}
                      alt={project.alt}
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src={project.img3}
                      alt={project.alt}
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
                    <strong>Category</strong>: {project.category}
                  </li>
                  <li>
                    <strong>Client</strong>: {project.client}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href={project.goTo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.urlToShow}
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

export default PortfolioDetails;
