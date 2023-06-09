import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <img src="../../public/loader.gif" alt="" />
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
