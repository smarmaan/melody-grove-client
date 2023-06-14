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
        <SwiperSlide className="flex-col gap-8 overflow-hidden relative rounded-3xl">
          <img
            className="rounded-2xl bg-cover object-cover "
            src="https://i.ibb.co/mb7zHV1/1162901.jpg"
            alt="instrument"
          />

          <div className="bg-black bg-opacity-80 absolute opacity-0 hover:opacity-100 rounded-xl md:py-10 md:mx-5 p-10 mx-10">
            <h1 className="text-[20px] md:text-2xl uppercase font-extrabold  text-[#ffae00] shadow-2xl drop-shadow-xl md:mb-5 underline">
              Welcome to Melody Grove:
              <br /> Your Harmonious Summer Camp Experience
            </h1>
            <h1 className="text-[18px] text-left md:text-center md:text-lg md:uppercase  text-[#f2f8f4bd] shadow-2xl drop-shadow-xl">
              At Melody Grove, we invite you to embark on an enchanting musical
              journey like no other. Nestled amidst natures serenade, our summer
              camp school is a haven for aspiring musicians of all ages.
              Discover the joy of learning music instruments while basking in
              the warmth of the sun and the vibrant melodies that fill the air.
              Our expert instructors, state-of-the-art facilities, and immersive
              curriculum ensure that every camper uncovers their unique rhythm
              and reaches new heights of musical prowess. Join us at Melody
              Grove and let the summer symphony begin!
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex-col gap-8 overflow-hidden relative rounded-3xl">
          <img
            className="rounded-2xl bg-cover object-cover "
            src="https://i.ibb.co/VLSrXwL/musical-instruments-2x.png"
            alt="instrument"
          />

          <div className="bg-black bg-opacity-80 absolute opacity-0 hover:opacity-100 rounded-xl md:py-10 md:mx-5 p-10 mx-10">
            <h1 className="text-[20px] md:text-2xl uppercase font-extrabold  text-[#ffae00] shadow-2xl drop-shadow-xl md:mb-5 underline">
              Ignite Your Musical Passion in the Summer Sun
            </h1>
            <h1 className="text-[18px] text-left md:text-center md:text-lg md:uppercase  text-[#f2f8f4bd] shadow-2xl drop-shadow-xl">
              Melody Grove warmly welcomes you to our captivating summer camp
              school, where the magic of music comes alive under the radiant
              summer skies. Step into a world where melodies bloom, and
              instrumental harmony blossoms. With a harmonious blend of expert
              guidance, creative exploration, and boundless inspiration, Melody
              Grove offers a transformative experience for music enthusiasts of
              all ages. Join us in our idyllic setting and immerse yourself in
              the captivating world of music at Melody Grove.
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex-col gap-8 overflow-hidden relative rounded-3xl">
          <img
            className="rounded-2xl bg-cover object-cover "
            src="https://img.freepik.com/free-vector/round-music-composition_1284-34252.jpg"
            alt="instrument"
          />

          <div className="bg-black bg-opacity-80 absolute opacity-0 hover:opacity-100 rounded-xl md:py-10 md:mx-5 p-10 mx-10">
            <h1 className="text-[20px] md:text-2xl uppercase font-extrabold  text-[#ffae00] shadow-2xl drop-shadow-xl md:mb-5 underline">
              Unleash Your Inner Virtuoso at the Ultimate Summer Camp School
            </h1>
            <h1 className="text-[18px] text-left md:text-center md:text-lg md:uppercase  text-[#f2f8f4bd] shadow-2xl drop-shadow-xl">
              Melody Grove, the ultimate destination for music enthusiasts,
              welcomes you to a summer camp experience that harmonizes learning,
              fun, and artistic growth. Set against the backdrop of lush
              greenery and infused with the spirit of creativity, our camp
              offers a comprehensive curriculum designed to ignite your musical
              talents. Immerse yourself in the symphony of diverse instruments,
              guided by our accomplished instructors, and witness your skills
              flourish in an environment filled with encouragement and
              camaraderie. Unleash your inner virtuoso and set your musical
              journey ablaze at Melody Grove.
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex-col gap-8 overflow-hidden relative rounded-3xl">
          <img
            className="rounded-2xl bg-cover object-cover "
            src="https://i.ibb.co/4ZNPZnr/kid-learning-guitar-carousel.jpg"
            alt="instrument"
          />

          <div className="bg-black bg-opacity-80 absolute opacity-0 hover:opacity-100 rounded-xl md:py-10 md:mx-5 p-10 mx-10">
            <h1 className="text-[20px] md:text-2xl uppercase font-extrabold  text-[#ffae00] shadow-2xl drop-shadow-xl md:mb-5 underline">
              Where the Sounds of Summer Blend with Musical Brilliance{" "}
            </h1>
            <h1 className="text-[18px] text-left md:text-center md:text-lg md:uppercase  text-[#f2f8f4bd] shadow-2xl drop-shadow-xl">
              Melody Grove extends a warm invitation to all music enthusiasts
              seeking an unforgettable summer experience. In the heart of our
              harmonious camp, melodies intertwine with the spirit of summer,
              creating an atmosphere that exudes joy, creativity, and
              exploration. With a comprehensive range of music instruments to
              choose from, our skilled instructors will inspire and guide you on
              your musical voyage. Whether you are a novice or a seasoned
              musician, Melody Grove offers a nurturing environment where your
              passion for music can flourish. Embrace the melodic symphony of
              summer at Melody Grove and create memories that resonate for a
              lifetime.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
