import React, { CSSProperties } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const swiperStyle: CSSProperties = {
  height: "100%",
  position: "absolute",
  width: "100%",
  backgroundColor: "#f20c00",
  color: "#fff143",
  fontWeight: 700,
  fontSize: 40,
};

export default function App() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={swiperStyle}
        direction="vertical"
      >
        <SwiperSlide style={{ height: "100%" }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={swiperStyle}
          >
            <SwiperSlide
              style={{
                height: "100%",
              }}
            >
              1.1
            </SwiperSlide>
            <SwiperSlide style={{ height: "100%" }}>1.2</SwiperSlide>
            <SwiperSlide style={{ height: "100%" }}>1.3</SwiperSlide>
            <SwiperSlide style={{ height: "100%" }}>1.4</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>2</SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
