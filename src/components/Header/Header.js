import profileImg from './../../img/profile-img.jpg';

function Header() {
  return (
    <header id="header">
      <div class="d-flex flex-column">

        <div class="profile">
          <div class="profile__img">
            <img src={profileImg} alt="me" />
          </div>
          <h1 class="text-light"><a href="index.html">Serhii Kaliuzhnyi</a></h1>
          <div class="social-links mt-3 text-center">
            <a href="skype:live:.cid.6212d66bc386e8eb" class="google-plus" ><i class="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/sergey-kaliuzhnyi-217677246" class="linkedin" ><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><a href="index.html#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="index.html#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="index.html#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="index.html#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="index.html#testimonials" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Testimonials</span></a></li>
            <li><a href="index.html#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;