import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from "/public/error-page.json";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen max-w-screen">
      <>
        <h1 className="rounded-2xl shadow-xl my-5">
          <Lottie animationData={error} loop></Lottie>
          <Link to="/">
            <button className="btn flex mx-auto mb-10 hover:bg-[#ffc700]  md:btn-lg btn-wide">
              BACK TO HOMEPAGE
            </button>
          </Link>
        </h1>
      </>
    </div>
  );
};

export default ErrorPage;
