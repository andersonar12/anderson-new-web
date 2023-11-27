import { useEffect } from "react";
// Using a bundler like webpack
//@ts-ignore
import GLightbox from "glightbox";
import { projects } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
  }, []);

  // const handleInfo = (index: number, mode: string) => {
  //   if (mode === "view") {
  //     (document.querySelector("#portfolio-lightbox" + index) as HTMLAnchorElement)!.click();
  //   }

  //   if(mode === "details") {
  //     navigate("/details?id=" + index);
  //   }
  // };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container mt-3" data-aos="fade-up" data-aos-delay="100">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6  portfolio-item hvr-grow `} //filter-${item.type}
            >
              <div className="portfolio-wrap card" style={{ height: 300 }}>
                <div className="d-flex align-items-center h-100 ">
                  <img src={item.images[0]} className="img-fluid" alt="" height={300} />
                </div>
                <div className="portfolio-links">
                  <a
                    href={item.images[0]}
                    id={"portfolio-lightbox" + index}
                    className="portfolio-lightbox"
                    title={item.title}
                  >
                    <i className="bx bi-zoom-in"></i> Zoom In
                  </a>
                  <a onClick={() => navigate(`/details/?id=${index}`)}>
                    <i className="bx bi-info-square-fill"></i> Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
