import { useEffect } from "react";
import Title from "../../../Components/Title/Title";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popular-courses")
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center font-Cambria text-base">
        {popular.map((info) => (
          <PopularClassCard key={info._id} info={info}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
