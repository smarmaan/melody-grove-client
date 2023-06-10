import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import InstrumentsCategory from "../InstrumentsCategory/InstrumentsCategory";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Melody Grove | Home </title>
      </Helmet>
      <Banner />
      <Slider></Slider>
      <InstrumentsCategory></InstrumentsCategory>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
