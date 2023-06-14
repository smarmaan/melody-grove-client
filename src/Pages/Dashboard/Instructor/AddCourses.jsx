import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddCourses = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const courseInfo = data;

          const enrolled = 0;

          courseInfo.image = imgURL;
          courseInfo.price = parseFloat(data.price);
          courseInfo.status = "pending";
          courseInfo.seats = parseFloat(data.seats);
          courseInfo.enrolled = parseFloat(enrolled);
          console.log(courseInfo);

          axiosSecure.post("/available-Courses", courseInfo).then((data) => {
            console.log(data.data);

            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Course Added for Admin Review...",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Melody Grove | ADD COURSE </title>
      </Helmet>

      <div className="hero max-h-screen items-center text-base-content">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100 my-8">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/*  Course Name   */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Course Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Course name you want to add"
                {...register("courseName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/*  Course Image   */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Course Image
                </span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full "
              />
            </div>

            {/*  Instructor name    */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Instructor Name
                </span>
              </label>
              <input
                type="text"
                readOnly
                placeholder="Enter Your Name"
                defaultValue={user.displayName}
                {...register("instructorName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/*  Instructor email    */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Instructor Email
                </span>
              </label>
              <input
                type="email"
                readOnly
                placeholder="Enter Your email"
                defaultValue={user.email}
                {...register("instructorEmail", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/*  Available seats    */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Seats
                </span>
              </label>
              <input
                type="number"
                {...register("seats", { required: true })}
                placeholder="Amount of seats available"
                className="input input-bordered w-full "
              />
            </div>

            {/*  Price    */}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="$ 00"
                className="input input-bordered w-full "
              />
            </div>

            <input
              className="btn btn-accent mt-4"
              type="submit"
              value="Add Course"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCourses;
