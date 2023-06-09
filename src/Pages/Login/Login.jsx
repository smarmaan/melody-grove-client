import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <Helmet>
        <title> Melody Grove | Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/DfK7L2T/bg.jpg')] bg-cover">
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2  lg:text-left shadow-xl drop-shadow-xl p-10 rounded-2xl text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Link to="/">
              {" "}
              <button className="btn glass text-white font-bold text-xl">
                Home
              </button>{" "}
            </Link>
          </div>

          <div className="card   bg-[url('https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover drop-shadow-2xl md:w-1/2 max-w-sm shadow-2xl">
            <div className="hero-overlay bg-opacity-10"></div>

            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="mt-2">
                  <Link to="/sign-up">
                    <span className="p-2 bg-green-300 rounded-full ">
                      sign-up
                    </span>
                  </Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
