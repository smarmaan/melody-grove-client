import { Helmet } from "react-helmet-async";
import useBookedCart from "../../../Hooks/useBookedCart";
import { BsCurrencyDollar, BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookedCart = () => {
  const [bookedCart, refetch] = useBookedCart();

  const total = bookedCart.reduce((acc, item) => acc + item.price, 0);

  const totalFixed = total.toFixed(2);

  const handleDeleteProduct = (course) => {
    console.log(course);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked-courses/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Melody Grove | Booked Courses</title>
      </Helmet>

      <div>
        <h2>Number of Booked Courses : {bookedCart.length}</h2>
        <h2>Total Amount : {totalFixed}</h2>
      </div>

      <>
        <div className="overflow-x-auto w-full flex justify-center">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>PAY</th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}

              {bookedCart.map((course, index) => (
                <tr key={course._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{course.courseName}</td>
                  <td> $ {course.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(course)}
                      className="btn btn-ghost btn-xs bg-[#B91C1C]"
                    >
                      <BsTrash3Fill className=" text-white" />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs bg-[#d17b34af]">
                      <Link to={`/dashboard/payment/${course._id}`}>
                        <BsCurrencyDollar className="text-lg text-white" />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default BookedCart;
