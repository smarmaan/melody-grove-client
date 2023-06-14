import Swal from "sweetalert2";
import useAvailableCourses from "../../../Hooks/useAvailableCourses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageCourses = () => {
  const [availableCourses, , refetch] = useAvailableCourses();

  const [axiosSecure] = useAxiosSecure();

  const handleApprove = (course) => {
    console.log(course);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/available-Courses/${course._id}`).then((res) => {
          console.log(res.data);

          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${course.courseName} is active now..`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const handleDeny = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Enter Reason for Denial",
          input: "textarea",
          inputPlaceholder: "Enter your reason here...",
          inputAttributes: {
            "aria-label": "Enter your reason here",
          },
          showCancelButton: true,
          confirmButtonText: "Submit",
          cancelButtonText: "Cancel",
          preConfirm: (reason) => {
            if (!reason) {
              Swal.showValidationMessage("Please enter a reason");
            }
            return reason;
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const reason = result.value;
            axiosSecure
              .patch(`/available-Courses/deny/${course._id}`, {
                status: "denied",
                key: reason,
              })
              .then((res) => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                  refetch();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${course.courseName} is on denied list..`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          }
        });
      }
    });
  };

  return (
    <div className="flex-col">
      <Helmet>
        <title>Melody Grove | Manage Courses</title>
      </Helmet>

      <div className="text-center text-3xl font-bold my-5">Manage Courses</div>

      <table className="table text-center my-5">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>NO.</th>
            <th>COURSES IMAGE</th>
            <th>COURSES NAME</th>
            <th>Instructor NAME</th>
            <th>Instructor Email</th>
            <th>Available seats</th>
            <th>PRICE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody className="">
          {availableCourses.map((course, index) => (
            <tr key={course._id}>
              <th>{index + 1}</th>
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
              <td>
                <div className="font-bold">{course.instructorName}</div>
              </td>
              <td>
                <div className="font-bold">{course.instructorEmail}</div>
              </td>
              <td>
                <div className="font-bold">{course.seats}</div>
              </td>
              <td>{course.price}</td>
              <td>
                <h2 className="btn btn-ghost btn-xs">{course.status}</h2>
              </td>
              <td className=" my-10 ">
                <details
                  className={`dropdown mb-11 relative ${
                    course.status !== "pending" && "hidden"
                  }`}
                >
                  <summary className="m-1 btn btn-xs">Update</summary>
                  <h2 className=" shadow dropdown-content  rounded-box w-10 absolute z-10">
                    <button
                      onClick={() => handleApprove(course)}
                      className="btn btn-xs mb-1"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(course)}
                      className="btn btn-xs"
                    >
                      Deny
                    </button>
                  </h2>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
// ``}
