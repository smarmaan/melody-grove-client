import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);


  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="">
      <Helmet>
        <title> Melody Grove | Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/DfK7L2T/bg.jpg')] bg-cover">
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content flex-col md:flex-row-reverse gap-48 md:gap-10">
          <div className="text-center md:w-1/2 lg:text-left shadow-xl drop-shadow-xl  rounded-2xl text-white">
            <>
              <img
                src="../../../public/music.gif"
                className="w-full mt-20 md:-my-20 rounded-3xl absolute mx-auto"
                alt=""
              />

              <div className="relative z-5 mt-24 md:mt-0 md:top-5 md:left-16">
                <h1 className="text-4xl font-bold my-5">Login now!</h1>
                <p className="pr-16">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, exercitationem aliquid obcaecati iusto voluptatem
                  aliquam fuga eaque q
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

          <div className="card   bg-[url('https://i.ibb.co/QNJMZCY/photo-1571330735066-03aaa9429d89-ixlib-rb-4-0.jpg')] bg-cover drop-shadow-2xl md:w-1/2 max-w-sm shadow-2xl">
            <div className="hero-overlay bg-opacity-10"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

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
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter password"
                  name="password"
                  className="input input-bordered"
                />
                <div className="flex justify-between">
                  {errors.password?.type === "required" && (
                    <span className="text-red-600 my-2">
                      Password is required
                    </span>
                  )}

                  <div className="my-2" onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <div className="cursor-pointer bg-primary rounded-full px-2 flex items-center gap-1">
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
                </div>
              </div>
              {/* 


 */}

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>

            <p className="text-center  md:text-xl">
              <small className="flex-row items-center justify-center">
                Are you new at Melody Grove?{" "}
                <Link
                  className="btn btn-primary btn-xs mt-5 w-24 mx-auto"
                  to="/sign-up"
                >
                  Sign Up
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

export default Login;
