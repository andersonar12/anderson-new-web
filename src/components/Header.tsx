import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Header = () => {
  const toggleMenu = () => {
    document.querySelector("body")!.classList.toggle("mobile-nav-active");
    const navToggle = document.querySelector(".mobile-nav-toggle")!;
    navToggle.classList.toggle("bi-list");
    navToggle.classList.toggle("bi-x");
  };
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={toggleMenu}></i>

      {/* <!-- ======= Left Sidebar ======= --> */}
      <header id="header" className="d-flex flex-column">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/anderson-profile.png"
              alt=""
              className="img-fluid rounded-circle hvr-bob"
            />
            <h1 className="text-light">
              <Link to="/">Anderson Romero</Link>
            </h1>
            <strong className="text-light d-flex justify-content-center w-100">
              <span>SSR Web Developer</span>
            </strong>

            <div className="social-links mt-3 text-center">
              <a href="#" className="facebook mx-1 hvr-pop">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram mx-1 hvr-pop">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus mx-1 hvr-pop">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="linkedin mx-1 hvr-pop">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul className="ps-4 pe-4 w-100">
              <li className="">
                <a href="#hero" className="nav-link scrollto active hvr-shutter-out-horizontal">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li className="">
                <a href="#about" className="nav-link scrollto hvr-shutter-out-horizontal">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li className="">
                <a href="#resume" className="nav-link scrollto hvr-shutter-out-horizontal">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li className="">
                <a href="#portfolio" className="nav-link scrollto hvr-shutter-out-horizontal">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li className="">
                <a href="#services" className="nav-link scrollto hvr-shutter-out-horizontal">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li className="">
                <a href="#contact" className="nav-link scrollto hvr-shutter-out-horizontal ">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
        <Footer />
      </header>
      {/* <!-- End Left Sidebar --> */}
    </>
  );
};
