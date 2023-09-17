import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "firebase/app";
import { AuthContext } from "./Auth.js";
import logo from "../assets/logo.svg";

import M from 'materialize-css';

const Navbar = ({ tabs }) => {
  const activeLink = " text-[#318A33] px-12 underline underline-offset-4"
  const normalLink = "text-black px-12"
  const { currUser } = useContext(AuthContext);
  const handleLogout = async (e) => {
    if (e.target.innerText === "Logout") {
      await auth().signOut();
    }
  };
  useEffect(() => {
    M.AutoInit()
    let input = document.getElementById("message");
    M.CharacterCounter.init(input);

  }, []);
  return (
    <div>
      <nav className="nav-wrapper lg:h-28 bg-[#ddf3de] shadow-none">
        <div className="h-full flex justify-between items-center pl-[1.25rem] md:px-[2.5rem]">
          <img className="shrink-0 md:w-48 xl:w-60" src={logo} alt="logo" />
          <a href="menu-selection" data-target="mobile-links" className="sidenav-trigger">
            <i className="material-icons text-[#318A33]">menu</i>
          </a>
          <div className="right hide-on-med-and-down text-lg font-medium">
            {[["Home", "/Landing"],
            ["About", "/About"],
            ["Contact", "/Contact"]].map(([text, url]) => (
              <NavLink to={url}
                className={({ isActive }) => isActive ? activeLink : normalLink}>{text}</NavLink>
            ))}
          </div>
          <ul className="right hide-on-med-and-down">
            {tabs.map((e) =>
              currUser ? (
                <li key={e} onClick={handleLogout}>
                  <Link
                    value={e}
                    className={e}
                    to={e === "Logout" ? "/Signup" : "/"}
                  >
                    {e}
                  </Link>
                </li>
              ) : (
                  <Link
                    value={e}
                    className="flex justify-center items-center w-[8rem] h-[3rem] text-[1rem] font-bold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 border-2 border-[#fff] rounded-lg"
                    to={
                      e === "Login"
                        ? "/Login"
                        : e === "Sign Up"
                          ? "/Signup"
                          : "Login"
                    }
                  >
                    {e}
                  </Link>
                )
            )}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-links">
        {tabs.map((e) =>
          currUser ? (
            <li key={e} onClick={handleLogout}>
              <Link
                value={e}
                className={e}
                to={e === "Logout" ? "/Signup" : "/"}
              >
                {e}
              </Link>
            </li>
          ) : (
              <li key={e} className={e}>
                <Link
                  value={e}
                  className={e}
                  to={
                    e === "Login"
                      ? "/Login"
                      : e === "Sign Up"
                        ? "/Signup"
                        : "Login"
                  }
                >
                  {e}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Navbar;
