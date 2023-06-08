import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const themes = ["light", "dark", "cupcake", "night"];
  const themeNames = ["light", "dark", "cupcake", "night"];
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "cupcake";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    const themeIndex = themes.indexOf(currentTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    setCurrentTheme(themes[nextThemeIndex]);
  };

  const currentThemeIndex = themes.indexOf(currentTheme);
  const themeToggleBtnText = themeNames[currentThemeIndex];

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
      <li className="my-1 ">
        <NavLink to="/" className="navbar_routes_style">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navRouteOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Melody Grove</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navRouteOptions}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn" onClick={toggleTheme}>
          {themeToggleBtnText}
        </button>

        <NavLink to="/login" className="btn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
