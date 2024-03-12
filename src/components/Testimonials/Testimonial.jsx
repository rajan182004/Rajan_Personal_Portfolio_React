import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Thank you so much Mr. Rajan for helping me to build the frontend and UI part of my ecommerce website. Really excited to work with you on my next project.",
    },
    {
      img: profilePic2,
      review:
        "Really pleased with your work Mr. Rajan Gupta. Thank you for building such a smooth app with no bugs at all. I would give you 5 out of 5 in terms of rating.",
    },
    {
      img: profilePic3,
      review:
        "Mr. Rajan is a great free lance web developer. He has got great skills while building websites and he helped me build all the frontend and designing part of my website StudySync. Also he has invested in my website. It's privilege working with him..",
    },
    {
      img: profilePic4,
      review:
        "My name is Edward and I am his first foreign client. Thanks for helping me build a movie downloader app. Now I can download movies and series for free just because of you.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
