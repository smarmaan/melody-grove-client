import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <Helmet>
        <title> Melody Grove | Sign Up </title>
      </Helmet>

      <div className="hero min-h-screen bg-[url('https://i.ibb.co/DfK7L2T/bg.jpg')] bg-cover">
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content flex-col md:flex-row-reverse gap-48 md:gap-10 mt-16">
          <div className="text-center md:w-1/2 lg:text-left shadow-xl drop-shadow-xl  rounded-2xl text-white">
            <>
              <img
                src="../../../public/piano-signup.gif"
                className="w-full mt-20 md:-my-20 rounded-3xl absolute mx-auto"
                alt=""
              />

              <div className="relative z-5 mt-24 md:mt-0 md:top-5 md:left-16">
                <h1 className="text-4xl font-bold my-5">Sign Up!</h1>
                <p className="pr-16">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, exercitationem obcaecati iusto voluptatem aliquam fuga
                </p>
                <Link to="/">
                  {" "}
                  <button className="btn glass text-white font-bold md:text-xl my-5">
                    Home
                  </button>{" "}
                </Link>
              </div>
            </>
          </div>
          {/* 






 */}
          <div className="card bg-[url('https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?cs=srgb&dl=pexels-philip-boakye-3428498.jpg&fm=jpg')] bg-cover drop-shadow-2xl md:w-1/2 max-w-sm shadow-2xl">
            <div className="hero-overlay bg-opacity-10"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
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
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
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
                  placeholder="Type here"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
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
                    type="text"
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
                    <span className="text-red-600">Password is required</span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password must be 6 characters long
                    </span>
                  )}

                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      Password must be less than 20 characters long
                    </span>
                  )}

                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
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
                    type="text"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="Password Again"
                    name="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">Password is required</span>
                  )}
                </div>
              </div>
              {/* 






 */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Gender"
                    name="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Number"
                    name="number"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              </div>

              {/* 






 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Address"
                  name="number"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
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
