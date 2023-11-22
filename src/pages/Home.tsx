import { useEffect } from "react";
import Typed from "typed.js";

let typeInited = null as Typed | null;

export function Home() {
  useEffect(() => {
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
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                <img src="assets/img/anderson-profile.png" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong>{" "}
                        <span>1 May 1995</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Website:</strong>{" "}
                        <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                        <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                        <span>New York, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                        <span>30</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                        <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong>{" "}
                        <span>email@example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>{" "}
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam
                  sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et
                  eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur
                  qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab
                  et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
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
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row no-gutters">
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
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
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
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
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
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
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
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
      </main>
    </div>
  );
}
