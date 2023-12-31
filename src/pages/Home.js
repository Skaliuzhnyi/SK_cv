import profileImg from "./../img/profile-img.jpg";
import testimonials1 from './../img/testimonials/testimonials-1.jpg';
import testimonials2 from './../img/testimonials/testimonials-2.jpg';
import testimonials3 from './../img/testimonials/testimonials-3.jpg';
import testimonials4 from './../img/testimonials/testimonials-4.jpg';

import Project from "../components/Poroject/Poroject";
import { projects } from './../helpers/progectList';
import NameTyped from "../components/NameTyped/NameTyped";
import PureCounters from "../components/PureCounter/PureCounter";

function Home() {

  return (
    <main
      id="main"
      className="main page__main"
    >
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <NameTyped />
      </section>

      <section
        id="about"
        className="about"
      >
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-right"
            >
              <img
                src={profileImg}
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-8 pt-4 pt-lg-0 content"
              data-aos="fade-left"
            >
              <h3>Front-end Developer.</h3>
              <p className="fst-italic">What you need to know about me</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>19 June 1985</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>38</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Kyiv, UKRAINE</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{' '}
                      <span>
                        <a href="tel:+380661876001">+38 (066) 187-60-01</a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{' '}
                      <span>
                        <a href="mailto:flskaliuzhnyi@gmail.com">flskaliuzhnyi@gmail.com</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>language:</strong> <span>UA (native)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>language:</strong> <span>En (Intermediate)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>I'm an enthusiastic and detail-oriented Front-end developer seeking position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="facts"
        className="facts"
      >
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
          </div>

          <PureCounters />
          
        </div>
      </section>

      <section
        id="skills"
        className="skills section-bg"
      >
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Basic knowledge that I constantly use in my projects.</p>
          </div>

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

          <ul className="list-group">
            <li className="list-group-item active">Professional skills</li>
            <li className="list-group-item">--- experience with HTML5, CSS3, JS</li>
            <li className="list-group-item">--- knowledge of JavaScript/JQuery</li>
            <li className="list-group-item">--- experience in adaptive layout</li>
            <li className="list-group-item">--- experience in creating an HTML page for a website based on design layouts</li>
            <li className="list-group-item">--- experience in layout of sites and templates for CMS</li>
            <li className="list-group-item">--- skills of binding to the user interface of scripts that provide visualization and animation of the site pages</li>
            <li className="list-group-item">--- knowledge of CSS frameworks</li>
            <li className="list-group-item">--- knowledge of cross-browser layout</li>
            <li className="list-group-item">--- Figms, Photoshop knowledge</li>
            <li className="list-group-item">--- Pixel Perfect</li>
            <li className="list-group-item">--- Gulp</li>
          </ul>
        </div>
      </section>

      <section
        id="resume"
        className="resume"
      >
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
            >
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Landing layout &amp; creation themes on CMS WordPress</h4>
                <h5>july 2023</h5>
                <p>
                  <em>Ivan Petrichenko course on Udemy</em>
                </p>
                <p>I learned how to install my layout or create my own themes on WordPress from the beginning to the creation of a full-fledged product!</p>
                <p>
                  certificate URL:
                  <br />
                  <a
                    href="ude.mv/UC-98d9810b-сБае-469с-8825-595afb3cc0e"
                    target="_blank"
                  >
                    ude.mv/UC-98d9810b-сБае-469с-8825-595afb3cc0e
                  </a>
                </p>
              </div>
              <div className="resume-item">
                <h4>WEB Development</h4>
                <h5>november 2021 - jauary 2022</h5>
                <p>
                  <em>Course "From 0 to 1" by Vadim Prokopchuk</em>
                </p>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Master in Economics of Housing and Communal Services</h4>
                <h5>2002 - 2005</h5>
                <p>
                  <em>State Academy of Housing and Communal Services</em>
                </p>
                <p></p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Front-end developer</h4>
                <h5>2022 - Present</h5>
                <p>
                  <em>Plut-on digital & Freelance</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Restaurant owner</h4>
                <h5>2015 - 2022</h5>
                <p>
                  <em>Self employed</em>
                </p>
                <ul>
                  <li>construction of restaurants</li>
                  <li>restaurant management</li>
                  <li>selling restaurants as a running business</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Restaurant manager</h4>
                <h5>2006 - 2014</h5>
                <ul>
                  <li>work with personnel</li>
                  <li>work with providers</li>
                  <li>work with law enforcement agencies and permits</li>
                  <li>restaurant development</li>
                  <li>construction of restaurants</li>
                  <li>restaurant management</li>
                  <li>selling restaurants as a running business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="portfolio section-bg"
      >
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>You can see examples of my work here.</p>
          </div>
          <div
            className="row"
            data-aos="fade-up"
          >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className="filter-active"
                >
                  All
                </li>
                <li data-filter=".filter-lp">Landing page</li>
                <li data-filter=".filter-web">Web</li>
                <li data-filter=".filter-wp">Word press</li>
                <li data-filter=".filter-shop">Shop</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projects.map((project, index) => {
              return (
                <Project
                  key={project.alt}
                  className={project.className}
                  img={project.img1}
                  href={project.href}
                  alt={project.alt}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="testimonials section-bg"
      >
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>I recommend cooperation, all tasks are completed qualitatively and on time. Added my edits to improve the code, seo and website promotion.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonials3}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Victor Plut</h3>
                  <h4>PluOn owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Satisfied with the result! The main task was completed - clean code with the introduction of WordPress.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonials2}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Alexander Palamarchuk</h3>
                  <h4>Cyfra Service center owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Great job. The task was completed on time, all corrections and wishes were taken into account. I recommend!
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonials1}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Ivan Dranenko</h3>
                  <h4>Disystems owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Sergey did a great job. The project was done in good quality and in the agreed terms. All the feedback was implemented. I recommend hiring him for your projects.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonials4}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Igor Gana</h3>
                  <h4>ArtGana owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Another well-done project. I recommend to cooperation.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonials4}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Igor Gana</h3>
                  <h4>ArtGana owner</h4>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact"
      >
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>I am always in touch. Choose for yourself any convenient way.</p>
          </div>

          <div
            className="row"
            data-aos="fade-in"
          >
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Kyiv, Ukraine</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a href="mailto:380661876001">flskaliuzhnyi@gmail.com</a>
                  </p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>
                    <a href="tel:380661876001">+38 (066) 187-60-01</a>
                  </p>
                </div>

                <div className="map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;