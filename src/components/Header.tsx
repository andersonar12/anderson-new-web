import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { useEffect } from "react";

const navLinks = [
  {
    href: "#hero",
    className: "nav-link scrollto active hvr-shutter-out-horizontal",
    icon: "bx bx-home",
    text: "Home",
  },
  {
    href: "#about",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bx-user",
    text: "About",
  },
  {
    href: "#facts",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bi-card-heading",
    text: "Facts",
  },
  {
    href: "#skills",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bi-code-slash",
    text: "Skills",
  },
  {
    href: "#portfolio",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bi-journal-album",
    text: "Portfolio",
  },
  {
    href: "#services",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bx-server",
    text: "Services",
  },
  {
    href: "#contact",
    className: "nav-link scrollto hvr-shutter-out-horizontal",
    icon: "bx bx-envelope",
    text: "Contact",
  },
];

export const Header = () => {
  useEffect(() => {
    let navbarlinks = document.querySelectorAll(
      "#navbar .scrollto"
    ) as NodeListOf<HTMLAnchorElement>;
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash) as HTMLAnchorElement;
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    document.addEventListener("scroll", navbarlinksActive);
  }, []);

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

          {/* <!-- ======= Navbar ======= --> */}
          <nav id="navbar" className="nav-menu navbar">
            <ul className="ps-4 pe-4 w-100">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className={link.className}>
                    <i className={link.icon}></i> <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* <!-- ======= Navbar ======= --> */}
        </div>
        <Footer />
      </header>
      {/* <!-- End Left Sidebar --> */}
    </>
  );
};
