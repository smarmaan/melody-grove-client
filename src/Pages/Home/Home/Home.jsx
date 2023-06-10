import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import InstrumentsCategory from "../InstrumentsCategory/InstrumentsCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Melody Grove | Home </title>
      </Helmet>
      <Banner />
      <Slider></Slider>
      <InstrumentsCategory></InstrumentsCategory>
    </div>
  );
};

export default Home;
