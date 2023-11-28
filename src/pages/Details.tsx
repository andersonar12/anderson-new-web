import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { projects } from "../data/data";

export const Details = () => {
  const [slides, setSlides] = useState([] as string[]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    let params = new URL(document.location as unknown as string).searchParams;
    let id = params.get("id");
    console.log(id);

    if (id) {
      const project = projects[+id];
      setTitle(project.title);
      setDescription(project.description);
      setSlides(project.images);
    }
  }, []);

  return (
    <div id="main">
      <section id="breadcrumbs" className="breadcrumbs aos-init" data-aos="fade-right">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Project Details</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Project Details</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details aos-init" data-aos="fade-up">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              {slides.length > 0 && (
                <Swiper
                  autoHeight={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <img src={"/" + slide} className="img-fluid" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>: <a href="#">www.example.com</a>
                  </li>
                </ul> */}
              </div>
              {/* <div className="portfolio-description">
                <h2>{title}</h2>
                <p>{description}</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Details Section --> */}
    </div>
  );
};
