import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Melody Grove | Home </title>
      </Helmet>
      <Banner />{" "}
    </div>
  );
};

export default Home;
