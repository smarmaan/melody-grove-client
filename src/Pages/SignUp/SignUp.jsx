import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import signUp from "../../../public/piano-signup.gif";

const SignUp = () => {
  const { createUser, updateUserProfile, LogOut } = useContext(AuthContext);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            email: data.email,
            name: data.name,
            role: "student",
          };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });

                LogOut();
                navigate("/login");
              }
            });
        })

        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="">
      <Helmet>
        <title> Melody Grove | Sign Up </title>
      </Helmet>

      <div className="hero font-Cambria min-h-screen bg-[url('https://i.ibb.co/DfK7L2T/bg.jpg')] bg-cover">
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content flex-col md:flex-row-reverse gap-48 md:gap-10 mt-12 mb-5">
          <div className="text-center md:w-1/2 lg:text-left shadow-xl drop-shadow-xl  rounded-2xl text-white">
            <>
              <img
                src={signUp}
                className="w-full mt-20 md:-my-20 rounded-3xl absolute mx-auto"
                alt=""
              />

              <div className="relative z-5 mt-24 md:mt-0 md:top-5 md:left-16">
                <h1 className="text-4xl font-bold my-5">Sign Up!</h1>
                <p className="pr-16">
                  Unlock Your Musical Potential. Join Melody Grove Today! Live
                  your emotions ........................... Join with our
                  team... Be our family........
                </p>
                <Link to="/">
                  {" "}
                  <button className="btn glass text-white font-bold my-5">
                    Home
                  </button>{" "}
                </Link>
              </div>
            </>
          </div>
          {/* 






 */}
          <div className="card bg-[url('')] bg-cover drop-shadow-2xl max-w-m shadow-2xl my-10">
            <div className="hero-overlay bg-opacity-10"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your name here"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-cyan-300 font-bold text-lg">
                    Name is required
                  </span>
                )}
              </div>

              {/* 






 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-cyan-300 font-bold text-lg">
                    Photo URL is required
                  </span>
                )}
              </div>

              {/* 






 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type your Email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-cyan-300 font-bold text-lg">
                    Email is required
                  </span>
                )}
              </div>

              {/* 






 */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={passwordType}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Enter password"
                    name="password"
                    className="input input-bordered"
                  />

                  {errors.password?.type === "required" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Password is required
                    </span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Password must be 6 characters long
                    </span>
                  )}

                  {errors.password?.type === "maxLength" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Password must be less than 20 characters long
                    </span>
                  )}

                  {errors.password?.type === "pattern" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Password must have one of uppercase, lowercase , number
                      special character.
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={passwordType}
                    {...register("confirm", {
                      required: true,
                    })}
                    placeholder="Type Again"
                    name="confirm"
                    className="input input-bordered"
                  />
                  {errors.confirm?.type === "required" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Password Must Match
                    </span>
                  )}
                </div>
              </div>

              <div className="my-2 mx-auto" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <div className="cursor-pointer bg-primary rounded-full px-1 flex items-center gap-1">
                    <FaEye></FaEye>
                    Show Password
                  </div>
                ) : (
                  <div className="cursor-pointer bg-primary rounded-full px-2  flex items-center gap-1">
                    <FaEyeSlash />
                    Hide Password
                  </div>
                )}
              </div>

              {/* 






 */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    defaultValue="Pick One"
                    {...register("gender", { required: true })}
                    className="select select-bordered"
                  >
                    <option className="btn btn-primary" disabled>
                      Pick One
                    </option>
                    <option className="btn btn-primary">Male</option>
                    <option className="btn bg-[#f1c2aa]">Female</option>
                    <option className="btn btn-primary">Children</option>
                    <option className="btn bg-[#f1c2aa]">Others</option>
                  </select>

                  {errors.gender?.type === "required" && (
                    <span className="text-cyan-300 font-bold text-lg">
                      {" "}
                      Must Select your Gender
                    </span>
                  )}
                </div>

                {/*        

----------------------- Address Filed ------------------------ 

*/}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="number"
                    {...register("number", { required: true })}
                    placeholder="Contact Number"
                    name="number"
                    className="input input-bordered"
                  />
                  {errors.number && (
                    <span className="text-cyan-300 font-bold text-lg">
                      Number is required
                    </span>
                  )}
                </div>
              </div>

              {/* 




        ------------------------ Address Filed ------------------------
 
 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Enter Address"
                  name="address"
                  className="input input-bordered"
                />
                {errors.address && (
                  <span className="text-cyan-300 font-bold text-lg">
                    Address is required
                  </span>
                )}
              </div>

              {/* 






 */}

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>

              {/* 






 */}
            </form>

            {/* 






 */}

            <p className="text-center  md:text-xl">
              <small className="flex-row items-center justify-center">
                Already have an account at Melody Grove?{" "}
                <Link
                  className="btn btn-primary btn-xs w-24 mx-auto"
                  to="/login"
                >
                  Login
                </Link>
              </small>
            </p>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
