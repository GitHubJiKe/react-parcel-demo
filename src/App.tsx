import React, { CSSProperties } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const swiperStyle: CSSProperties = {
  position: "absolute",
  fontWeight: 700,
  fontSize: 40,
};

export default function App() {
  return (
    <div>
      <Swiper
        className="h-full w-full bg-red text-yellow"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={swiperStyle}
        direction="vertical"
      >
        <SwiperSlide className="h-full">
          <Swiper
            className="h-full w-full bg-red text-yellow"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={swiperStyle}
          >
            <SwiperSlide
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
              }}
            >
              Slide 1.1
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
              }}
            >
              Slide 1.2
            </SwiperSlide>
            <SwiperSlide>Slide 1.3</SwiperSlide>
            <SwiperSlide>Slide 1.4</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide className="h-full">Slide 2</SwiperSlide>
        <SwiperSlide className="h-full">Slide 3</SwiperSlide>
        <SwiperSlide className="h-full">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
