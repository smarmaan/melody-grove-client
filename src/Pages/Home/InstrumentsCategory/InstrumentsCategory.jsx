import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./instrumentsCategory.css";

const InstrumentsCategory = () => {
  const [instrumentsCategory, setInstrumentsCategory] = useState([]);

  useEffect(() => {
    fetch("/public/silder.json")
      .then((res) => res.json())
      .then((data) => setInstrumentsCategory(data));
  }, []);

  //   console.log(instrumentsCategory);

  return (
    <>
      {" "}
      <section className="my-24">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=""
        >
          {instrumentsCategory.map((instrument, index) => (
            <SwiperSlide
              key={index}
              className="flex-col gap-8 py-24 overflow-hidden relative"
            >
              <img
                className="rounded-2xl bg-cover object-cover "
                src={instrument.image}
                alt={instrument.name}
              />

              <div className="bg-black bg-opacity-80 absolute opacity-0 hover:opacity-100 rounded-xl md:py-10 md:mx-5">
                <h1 className="text-xs md:text-2xl uppercase font-extrabold  text-[#ff0000] shadow-2xl drop-shadow-xl mb-5 underline">
                  {instrument.name}
                </h1>
                <h1 className="text-[8px] text-left md:text-center md:text-lg uppercase  text-[#f2f8f4bd] shadow-2xl drop-shadow-xl">
                  {instrument.description}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default InstrumentsCategory;
