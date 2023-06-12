import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/available-Courses-approved";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAvailableCourses(data);
      });
  }, []);

  console.log(availableCourses);

  return (
    <div>
      <Helmet>
        <title> Melody Grove | Courses </title>
      </Helmet>

      <section className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center font-Cambria  mx-24 md:mx-auto">
          {availableCourses.map((course) => (
            <ClassCard key={course._id} course={course}></ClassCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
