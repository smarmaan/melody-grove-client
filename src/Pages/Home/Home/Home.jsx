import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Melody Grove | Home </title>
      </Helmet>
      <Banner />
      <Slider></Slider>
    </div>
  );
};

export default Home;
