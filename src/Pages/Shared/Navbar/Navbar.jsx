import { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowDropDownCircle } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthProvider";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const themes = ["light", "dark", "cupcake", "night"];
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "cupcake";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navRouteOptions = (
    <>
      <li className="my-1">
        <NavLink to="/" className="navbar_routes_style">
          Home
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink to="/instructors" className="navbar_routes_style">
          Instructors
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink to="/classes" className="navbar_routes_style">
          Classes
        </NavLink>
      </li>
      <li className="my-1">
        <NavLink to="/dashboard" className="navbar_routes_style">
          Dashboard
        </NavLink>
      </li>

      <li className="my-1">
        <NavLink to="/dashboard/welcome">
          <button className="">
            <RiDashboardFill className="text-2xl" />
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-black font-Cambria font-extrabold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  text-base-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navRouteOptions}
          </ul>
        </div>
        <a className="normal-case md:text-xl flex justify-center items-center gap-10">
          <img
            src="../../../../public/Gold Modern Music Logo.gif"
            className="w-16 rounded-full"
            alt=""
          />
          <h2 className="bg-white px-2 rounded-full py-1"> Melody Grove</h2>{" "}
        </a>
      </div>
      <div className="navbar justify-center hidden lg:flex text-base-content">
        <ul className="menu menu-horizontal px-1">{navRouteOptions}</ul>
      </div>

      <div className="navbar-end gap-10">
        <div className="dropdown dropdown-bottom dropdown-end ">
          <label
            tabIndex={0}
            className="cursor-pointer inline-flex items-center"
          >
            <button className="btn btn-xs">
              <MdArrowDropDownCircle className="w-5" /> Theme
            </button>
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3">
            {themes.map((theme) => (
              <li key={theme} onClick={() => changeTheme(theme)}>
                <button className="btn my-1 btn-sm px-16 w-10">{theme}</button>
              </li>
            ))}
          </ul>
        </div>

        {user?.photoURL ? (
          <>
            <figure>
              <img
                className="avatar w-12 shadow-2xl drop-shadow-2xl rounded-full  z-10"
                src={user?.photoURL}
                title={user?.displayName}
                alt=""
              />
            </figure>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
