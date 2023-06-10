import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import Title from "../../../Components/Title/Title";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <section className="">
      <Title
        heading={"Explore the World of Music Instruments"}
        subheading={
          "Discover a Wide Range of Instruments and Find Your Melodic Passion"
        }
      ></Title>

      <div className="wrapper my-24">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell">
              <img
                src="https://i.ibb.co/Drb0ddQ/Guitar.jpg"
                className="rounded-2xl  w-36 h-36   md:w-44 md:h-60 drop-shadow-xl"
                alt=""
              />
            </div>
            <div className="carousel__cell ">
              <img
                src="https://i.ibb.co/6DNLC1v/Violin.jpg"
                className="  w-36 h-36   md:w-44 md:h-60  rounded-2xl  drop-shadow-xl"
                alt=""
              />
            </div>
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1621628898826-8956e10449eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fENlbGxvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1565743764716-1f50b606230e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}

            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1608869843129-3da551dcde5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1573871669414-010dbf73ca84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1609682158993-63946be803a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://plus.unsplash.com/premium_photo-1664194584442-3218ee3940ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1601392820795-fcd89c49eac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
            <div className="carousel__cell ">
              <img
                src="https://images.unsplash.com/photo-1578841345191-037d88f2011c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-36 h-36 md:w-44 md:h-60  rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* 




*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
