import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import dashboard from "../../../../public/dashboard.json";

const Welcome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Melody Grove | Welcome Home</title>
      </Helmet>

      <div className="text-center text-white text-3xl font-Cambria my-20 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-3xl">
        <h2>
          WELCOME ON BOARD <br />
          <span className="text-4xl md:text-7xl">
            &quot;{user.displayName}&quot;
          </span>
        </h2>

        <Lottie animationData={dashboard} loop></Lottie>
      </div>
    </>
  );
};

export default Welcome;
