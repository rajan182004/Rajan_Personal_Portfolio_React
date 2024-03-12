import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import studysyncc from "../../img/studysyncc.png";
import vertosblog from "../../img/vertosblog.png";
import rajanblog from "../../img/rajanblog.png";
import lifeofpie from "../../img/lifeofpie.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={studysyncc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vertosblog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lifeofpie} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rajanblog} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
