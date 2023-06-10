import { useEffect } from "react";
import Title from "../../../Components/Title/Title";
import { useState } from "react";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("/public/silder.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  console.log(popular);
  return (
    <div className="my-24">
      <Title
        heading={"Popular Instruments Classes we provide"}
        subheading={
          "Explore the Most Popular Musical Instruments and Join the Summer Camp"
        }
      ></Title>

      <div className=""></div>
    </div>
  );
};

export default PopularClasses;
