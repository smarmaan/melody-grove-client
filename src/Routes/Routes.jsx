import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import BookedCart from "../Pages/Dashboard/BookedCart/BookedCart";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import UserHome from "../Pages/Dashboard/User/UserHome";
import ManageCourses from "../Pages/Dashboard/Admin/ManageCourses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome";
import AddCourses from "../Pages/Dashboard/Instructor/AddCourses";
import MyCourses from "../Pages/Dashboard/Instructor/MyCourses";
import EnrolledCourses from "../Pages/Dashboard/User/EnrolledCourses";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "manage-courses",
        element: <ManageCourses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "instructor-home",
        element: <InstructorHome />,
      },
      {
        path: "add-courses",
        element: <AddCourses />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "booked-courses",
        element: <BookedCart />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

{
  /* <PrivateRoute>
<Dashboard />
</PrivateRoute> */
}
