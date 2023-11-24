import { useEffect } from "react";

import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { skills, itemsAbout } from "../data/data";

let typeInited = null as Typed | null;

export function Home() {
  useEffect(() => {
    //AOS Animation
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    const initTyped = () => {
      const element = document.querySelector(".typed");
      if (element) {
        typeInited = new Typed(element, {
          strings: ["Web Developer", "Systems Engineer", "Frontend Developer", "Freelancer"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    };

    if (!typeInited) {
      initTyped();
    }

    // return () => {
    //   typeInited!.destroy();
    // };
  }, []);

  const toggleMenu = () => {
    let body = document.querySelector("body");
    if (body!.classList.contains("mobile-nav-active")) {
      body!.classList.remove("mobile-nav-active");
      let navbarToggle = document.querySelector(".mobile-nav-toggle");
      navbarToggle!.classList.toggle("bi-list");
      navbarToggle!.classList.toggle("bi-x");
    }
  };

  return (
    <div id="home" onClick={() => toggleMenu()}>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container aos-init aos-animate" data-aos="fade-in">
          <h1>Anderson Romero</h1>
          <p>
            I'm
            <span className="typed ms-2"></span>
          </p>
        </div>
      </section>

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                I have a deep passion for UI/UX design, and I am committed to developing innovative
                experiences 🦾 that delight customers and exceed their expectations. 🤝🏻 As a
                Systems Engineer and Web Developer ⚙️💻. Many years of experience working with a
                wide range of technologies
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 aos-init" data-aos="fade-right">
                <img src="assets/img/anderson-profile.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content aos-init" data-aos="fade-left">
                <h3>Systems Engineer &amp; Web Developer </h3>
                <p className="fst-italic">Basic personal information:</p>

                <div className="row">
                  <div className="col">
                    <ul>
                      {itemsAbout.map((item, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="me-2"
                            style={{ color: "#149ddd" }}
                          />
                          <strong>{item.title}:</strong>
                          <span>{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>
                  My specialty and area of expertise is Front End development, always with the
                  enthusiasm to learn and master the best technologies available. I am constantly
                  dedicated to developing best practices in programming syntax, acquiring new skills
                  and knowledge in the process.
                </p>
                <p className="fst-italic">"Living, learning, & leveling up one day at a time".</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Facts Section ======= --> */}
        <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>
                Over the years, I have had the pleasure of working with clients who have been
                satisfied with the service. This reflects the quality of the projects that have been
                successfully completed. Each project has been an opportunity to learn, grow and
                improve. I am proud of the results I have achieved and how this has contributed to
                client satisfaction.
              </p>
            </div>

            <div className="row no-gutters">
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="0"
                    className="purecounter"
                  >
                    232
                  </span>
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="0"
                    className="purecounter"
                  >
                    521
                  </span>
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="0"
                    className="purecounter"
                  >
                    1453
                  </span>
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="0"
                    className="purecounter"
                  >
                    32
                  </span>
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Facts Section --> */}

        {/* <!-- ======= Skills Section ======= --> */}

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>

            <div className="container mb-4 aos-init" data-aos="fade-up">
              <div className="row">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="col-4 col-md-3 col-lg-1 aos-init hvr-pop"
                    data-aos="zoom-in-left"
                    data-aos-delay={index * 15}
                  >
                    <img src={skill.img} className="img-fluid" />
                    <p className="fw-bold p-0 text-center" style={{ fontSize: "15px" }}>
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Skills Section --> */}
      </main>
    </div>
  );
}
