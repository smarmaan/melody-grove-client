import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBookedCart from "../../Hooks/useBookedCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const ClassCard = ({ course }) => {
  const {
    _id,
    courseName,
    instructorEmail,
    instructorName,
    image,
    price,
    seats,
  } = course;

  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  const [bookedCart, refetch] = useBookedCart();

  const navigate = useNavigate();

  const location = useLocation();

  const handleAddToBookedCart = (course) => {
    console.log(course);
    if (user && user.email) {
      const bookedCourse = {
        courseId: _id,
        courseName,
        image,
        price,
        email: user.email,
      };
      fetch("https://melody-grove-server.vercel.app/booked-courses", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(bookedCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You have added a Course to your Booked cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Book a Course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // Check if the course is already booked
  const isCourseBooked = bookedCart.some(
    (bookedCourse) => bookedCourse.courseId === _id
  );

  return (
    <div className="card card-compact w-96 shadow-2xl drop-shadow-2xl text-base-content">
      <figure className="w-full h-full">
        <img
          src={image}
          className="object-cover w-full h-64"
          alt={courseName}
        />
      </figure>
      <div
        className={`card-body bg-[#fc712b] ${
          seats === 0 && "bg-[#f00707]"
        } bg-cover rounded-ee-2xl rounded-es-2xl  `}
      >
        <h2 className="card-title md:text-4xl">{courseName}</h2>
        <h2 className="card-title">Price : {price}</h2>
        <h2 className="card-title">Available seats : {seats}</h2>
        <h2 className="card-title">Instructor Details: </h2>
        <h2 className="card-title md:text-lg text-center mx-auto">
          {instructorName} <br />
          {instructorEmail}
        </h2>

        <button
          onClick={() => handleAddToBookedCart(course)}
          className="btn"
          disabled={isCourseBooked || seats === 0 || isInstructor || isAdmin} // Disable the button if the course is already booked
        >
          {isCourseBooked ? "Course Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
