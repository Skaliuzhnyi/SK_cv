import { NavLink } from 'react-router-dom';

import profileImg from './../../img/profile-img.jpg';

function Header() {

  const menuLink = 'nav-link scrollto';
  const menuActiveLink = 'nav-link scrollto active';

  return (
    <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <div className="profile__img">
            <img src={profileImg} alt="me" />
          </div>

          <NavLink to="/" className="text-light">
              <h1>Serhii Kaliuzhnyi</h1>
          </NavLink>

          <div className="social-links mt-3 text-center">
            <a href="skype:live:.cid.6212d66bc386e8eb" target='_blank' rel="noreferrer"  className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/sergey-kaliuzhnyi-217677246" target='_blank' rel="noreferrer"  className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <NavLink to="/:hero" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
              <i className="bx bx-home"></i><span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/:about" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
              <i className="bx bx-user"></i><span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/:resume" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
              <i className="bx bx-file-blank"></i><span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/:portfolio" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
              <i className="bx bx-book-content"></i><span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/:hero" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
              <i className="bx bx-server"></i><span>Testimonials</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/:contact" className={({isActive}) => isActive ? menuActiveLink : menuLink}>
                <i className="bx bx-envelope"></i><span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;