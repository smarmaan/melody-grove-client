import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    let url = "https://melody-grove-server.vercel.app/all-instructors";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
      });
  }, []);

  console.log(allInstructors);

  return (
    <div className="">
      <Helmet>
        <title> Melody Grove | Instructors </title>
      </Helmet>

      <div className="container mb-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center font-Cambria text-base">
        {allInstructors.map((info) => (
          <InstructorCard key={info._id} info={info}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
