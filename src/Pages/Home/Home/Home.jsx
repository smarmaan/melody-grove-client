import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import InstrumentsCategory from "../InstrumentsCategory/InstrumentsCategory";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

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
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
