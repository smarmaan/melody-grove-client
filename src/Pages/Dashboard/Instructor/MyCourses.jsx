import Swal from "sweetalert2";
import useMyCourses from "../../../Hooks/useMyCourses";
import { VscFeedback } from "react-icons/vsc";

const MyCourses = () => {
  const [myCourses] = useMyCourses();
  console.log(myCourses);

  const showFeedback = (course) => {
    console.log(course.reason);

    if (course?.reason) {
      Swal.fire(`${course.reason}`);
    }
  };

  return (
    <div className="w-full font-Cambria">
      <h1 className="card-title flex justify-center my-10">
        Total courses : {myCourses.length}{" "}
      </h1>

      <table className="table text-center">
        <thead>
          <tr className="uppercase">
            <th>COURSES IMAGE</th>
            <th>COURSES NAME</th>
            <th>PRICE</th>
            <th>STATUS</th>
            <th>Total Enrolled Students</th>
            <th>Feedback </th>
            <th>Update </th>
          </tr>
        </thead>
        <tbody className="">
          {myCourses.map((course) => (
            <tr key={course._id}>
              <td>
                <div className="flex  space-x-3">
                  <div className="avatar mx-auto">
                    <div className="mask mask-squircle  w-12 h-12">
                      <img
                        src={course.image}
                        className=""
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{course.courseName}</div>
              </td>
              <td>{course.price}</td>
              <td>
                <h2 className="btn btn-ghost btn-xs">{course.status}</h2>
              </td>
              <td className={`${course.status === "pending" && "hidden"}`}>
                <h2 className="btn btn-ghost btn-xs">{course.enrolled}</h2>
              </td>
              <td
                onClick={() => showFeedback(course)}
                className={`${course.reason || "hidden"}`}
              >
                <h2 className="btn btn-ghost btn-xs">
                  <VscFeedback className="text-xl" />
                </h2>
              </td>
              <td>
                <h2 className="btn btn-ghost btn-xs">{""}</h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCourses;
