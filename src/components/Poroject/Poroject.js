function Project({ className, img, href, alt  }) {
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
            href={href}
            data-gallery="portfolioGallery"
            className="portfolio-lightbox"
            title="App 1"
          >
            <i className="bx bx-plus"></i>
          </a>
          <a
            href="portfolio-details-service-lux.html"
            title="More Details"
          >
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
