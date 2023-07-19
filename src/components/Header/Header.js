import profileImg from './../../img/profile-img.jpg';

function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <div className="profile__img">
            <img src={profileImg} alt="me" />
          </div>
          <h1 className="text-light"><a href="index.html">Serhii Kaliuzhnyi</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="skype:live:.cid.6212d66bc386e8eb" className="google-plus" ><i className="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/sergey-kaliuzhnyi-217677246" className="linkedin" ><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="index.html#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="index.html#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="index.html#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="index.html#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="index.html#testimonials" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Testimonials</span></a></li>
            <li><a href="index.html#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;