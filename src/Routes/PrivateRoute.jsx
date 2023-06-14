import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import loader from "../../public/loader.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <img src={loader} alt="" />
        </div>

        {/* {<Navigate to="/login" state={{ from: location }} replace></Navigate>} */}
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
