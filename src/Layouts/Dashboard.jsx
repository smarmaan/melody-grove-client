import { NavLink, Outlet } from "react-router-dom";
import {
  FaBookmark,
  FaHome,
  FaUsers,
  FaUsersCog,
  FaMoneyCheck,
} from "react-icons/fa";
import { MdOutlineClass, MdClass } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";
import useBookedCart from "../Hooks/useBookedCart";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const [bookedCart] = useBookedCart();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex justify-center ">
          <Outlet></Outlet>
        </div>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu gap-2 p-4 w-80  bg-[url('https://media.istockphoto.com/id/1212342896/vector/abstract-hexagon-wallpaper-white-background-3d-vector-illustration.jpg?s=612x612&w=0&k=20&c=ynRzXUZ4_Ga3Y7joKBABdXUQI4xBvrdHJnYueJWEiw8=')]  ">
          {/* Sidebar content here */}

          {/*                                      */}

          {(isAdmin && (
            <>
              {/* <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li> */}

              <li>
                <NavLink to="/dashboard/manage-courses">
                  <MdClass /> Manage Courses
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manage-users">
                  <FaUsersCog /> Manage Users
                </NavLink>
              </li>
            </>
          )) ||
            (isInstructor && (
              <>
                {/* <li>
                  <NavLink to="/dashboard/instructor-home">
                    <FaHome /> Instructor Home
                  </NavLink>
                </li> */}

                <li>
                  <NavLink to="/dashboard/add-courses">
                    <FaHome /> Add Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/my-courses">
                    <FaHome /> My Courses
                  </NavLink>
                </li>
              </>
            )) || (
              <>
                <li>
                  <NavLink to="/dashboard/user-home">
                    <FaHome /> User Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/booked-courses">
                    <button className="flex gap-2 items-center">
                      <FaBookmark /> My Booked Courses
                      <div className="badge badge-error">
                        {bookedCart?.length || 0}
                      </div>
                    </button>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/enrolled-courses">
                    <BsBookmarkPlusFill /> Enrolled Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/payment-history">
                    <FaMoneyCheck /> Payment History
                  </NavLink>
                </li>
              </>
            )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/instructors">
              <FaUsers /> Our instructors
            </NavLink>
          </li>

          <li>
            <NavLink to="/classes">
              <MdOutlineClass /> All Courses
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
