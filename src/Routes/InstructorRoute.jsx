import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useInstructor from "../Hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <img src="../../public/loader.gif" alt="" />
        </div>
      </>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
