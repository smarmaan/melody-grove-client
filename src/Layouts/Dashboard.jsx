import { NavLink, Outlet } from "react-router-dom";
import { FaBookmark, FaHome, FaUsers } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import useBookedCart from "../Hooks/useBookedCart";

const Dashboard = () => {
  const [bookedCart] = useBookedCart();

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

          <li>
            <NavLink to="/dashboard/booked-cart">
              <button className="flex gap-2 items-center">
                <FaBookmark /> My Booked Courses
                <div className="badge badge-error">
                  {bookedCart?.length || 0}
                </div>
              </button>
            </NavLink>
          </li>

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
              <MdOutlineClass /> All Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
