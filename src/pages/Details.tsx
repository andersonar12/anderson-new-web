import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

//@ts-ignore
import GLightbox from "glightbox";
import { projects } from "../data/data";

// interface Project {
//   image: string;
//   title: string;
//   description: string;
//   [Symbol.iterator](): Iterator<any>;
// }

let project: any;

export const Details = () => {
  const [slides, setSlides] = useState([] as string[]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let gallery: any;

  useEffect(() => {
    let params = new URL(document.location as unknown as string).searchParams;
    let id = params.get("id");
    console.log(id);

    if (id) {
      project = projects[+id];
      setTitle(project.title);
      setDescription(project.description);
      setSlides(project.images);
    }
  }, []);

  const openGallery = (index: number) => {
    console.log(gallery);
    if (gallery == undefined) {
      gallery = GLightbox({
        elements: project.images.map((image: string) => ({
          href: "/" + image,
          type: "image",
        })),
      });
    }
    gallery.openAt(index);
  };
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
                      {/* <a
                        href={"/" + slide}
                        id={"slide-images" + index}
                        data-height="auto"
                        className="slide-images"
                      >
                        <img src={"/" + slide} className="img-fluid" />
                      </a> */}
                      <img
                        onClick={() => openGallery(index)}
                        src={"/" + slide}
                        className="img-fluid"
                        style={{ cursor: "pointer" }}
                      />
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
