import { useEffect } from "react";
import Title from "../../../Components/Title/Title";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  useEffect(() => {
    let url = "https://melody-grove-server.vercel.app/popular-courses";
    if (showAll) {
      url += "?showAll=true";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, [showAll]);

  console.log(popular);
  return (
    <div className="my-24">
      <Title
        heading={"Popular Instruments Classes we provide"}
        subheading={
          "Explore the Most Popular Musical Instruments and Join the Summer Camp"
        }
      ></Title>

      <section className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center font-Cambria  mx-24 md:mx-auto">
          {popular.map((info) => (
            <PopularClassCard key={info._id} info={info}></PopularClassCard>
          ))}
        </div>
      </section>

      <button
        onClick={handleShowAll}
        className="btn btn-primary text-center flex mx-auto my-24"
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default PopularClasses;
