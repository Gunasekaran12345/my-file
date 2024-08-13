import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar1.jpg";
import AVTR3 from "../../assets/avatar1.jpg";
import AVTR4 from "../../assets/avatar1.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "2019",
    review: "I am complet my school 2019 in Arimalam GHSS ",
  },
  {
    avatar: AVTR2,
    name: "2022",
    review: "I am complet my school 2022 in JJcollege pudukkottai ",
  },
  {
    avatar: AVTR3,
    name: "2023",
    review: "I am complet my Full stact development course 2023 in Techmindinfotech pudukkottai",
  },
  // {
  //   avatar: AVTR4,
  //   name: "am",
  //   review: "Lorem ipsum dolor sit amet consectetur adipisicing",
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>View my </h5>
      <h2>Education</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
