// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className=" h-[900px] mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
          hiddenClass: "swiper-pagination-hidden",
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/mb7zHV1/1162901.jpg"
            className="bg-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/VLSrXwL/musical-instruments-2x.png"
            className="bg-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/7z8CHKx/mt-2022-101-4-48-f01.jpg"
            className="bg-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4ZNPZnr/kid-learning-guitar-carousel.jpg"
            className="bg-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
