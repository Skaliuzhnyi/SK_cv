import { NavLink } from 'react-router-dom';

function Project({ className, img, href, alt, index }) {
  return (
    <div className={className}>
      <div className="portfolio-wrap">
        <img
          src={img}
          className="img-fluid"
          alt={alt}
        />
        <div className="portfolio-links">
          <a
            href={img}
            data-gallery="portfolioGallery"
            className="portfolio-lightbox"
            title="App 1"
          >
            <i className="bx bx-plus"></i>
          </a>
          <NavLink
            to={`/portfolio-details/${index}`}
            title="More Details"
          >
            <i className="bx bx-link"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Project;
