import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


// components
import { NavLink } from "react-router-dom";

function SchoolSectionPage() {

  return(
    <section className="school-section-page">
      <div className="container wrap">
        <h1 className="title">Musiqa bo'limi</h1>
        <div className="slide-wrap">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
        </div>
        <ul className="navbar">
          <li className="item">
            <NavLink to={"/"}>Xalq cholg'ulari</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Mahsus fortopiano</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Torli cholg'ulari</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Torli cholg'ulari</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Xor drijorligi</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Musiqa nazariyasi</NavLink>
          </li>
          <li className="item">
            <NavLink to={"/"}>Umumiy fortopiano</NavLink>
          </li>
        </ul>
        <div className="content">
          <div className="left">
            <ul className="list">
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
            </ul>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  )
}

export default SchoolSectionPage;