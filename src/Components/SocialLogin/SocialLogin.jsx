import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import google from "../../../public/google-logo-effect.gif";

const SocialLogin = () => {
  const { GoogleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    GoogleSignIn().then((result) => {
      const loggedInUser = result.user;

      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,

        email: loggedInUser.email,

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
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <>
      <div className="divider m-2"></div>

      <div className="text-center mb-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle border-0"
        >
          <img src={google} className="rounded-full" alt="" />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
