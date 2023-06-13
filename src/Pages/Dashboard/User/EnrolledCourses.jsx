import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

const EnrolledCourses = () => {
  const [userEnrolledData, setUserEnrolledData] = useState([]);

  const { user } = useContext(AuthContext);

  console.log();
  useEffect(() => {
    fetch(`http://localhost:5000/user-stats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserEnrolledData(data);
      });
  }, [user.email]);

  console.log(userEnrolledData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-10 text-base-content font-Cambria">
        {userEnrolledData.map((data) => (
          <div
            key={data._id}
            className="card card-compact w-96 h-96 bg-base-100 shadow-xl"
          >
            <figure className="w-96 h-96">
              <img src={data.image} className="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title md:text-2xl">{data.courseName}</h2>
              <p className="uppercase">
                Purchased By:{" "}
                <span className="uppercase font-bold">{data.name}</span>{" "}
              </p>
              <p className="">
                Purchased By Email: <span className="">{data.email}</span>{" "}
              </p>
              <h2 className="">Payed price : {data.price}</h2>
              <h2 className="">
                Purchased Date: {moment(data.date).format("LLL")}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EnrolledCourses;
