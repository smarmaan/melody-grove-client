import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  useEffect(() => {
    let url = "http://localhost:5000/all-instructors";
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center font-Cambria text-base">
        {popular.map((info) => (
          <PopularInstructorCard
            key={info._id}
            info={info}
          ></PopularInstructorCard>
        ))}
      </div>

      <button
        onClick={handleShowAll}
        className="btn btn-primary text-center flex mx-auto my-24"
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default PopularInstructors;
