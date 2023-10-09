import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {auth, signOut} from './firebase.js'
import { AuthContext } from "./Auth.js";
import logo from "../assets/logo.svg";

import M from 'materialize-css';

const Navbar = ({ tabs }) => {
  const activeLink = " text-[#318A33] px-12 underline underline-offset-4"
  const normalLink = "text-black px-12"
  const { currUser } = useContext(AuthContext);
  const handleLogout = async (e) => {
    if (e.target.innerText === "Logout") {
      await signOut(auth);
    }
  };
  useEffect(() => {
    M.AutoInit()
  //   // let input = document.getElementById("message");
  //   // M.CharacterCounter.init(input);

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
            {[["Home", "/"],
            ["About", "/About"],
            ["Contact", "/Contact"]].map(([text, url]) => (
              <NavLink to={url}
                className={({ isActive }) => isActive ? activeLink : normalLink}>{text}</NavLink>
            ))}
          </div>
          <div className="lg:flex right hide-on-med-and-down">
            {tabs.map((e) =>
              currUser ? (
                <li key={e} onClick={handleLogout}>
                  <Link
                    value={e}
                    className={`${e} flex justify-center items-center w-[8rem] h-[3rem] text-[1rem] font-bold text-[#fff] xl:m-4 lg:m-[0.5rem] bg-gradient-to-r from-green-500 to-green-800 border-2 border-[#fff] rounded-lg`}
                    to={e === "Logout" ? "/Signup" : "/"}
                  >
                    {e}
                  </Link>
                </li>
              ) : (
                  <Link
                    value={e}
                    className="flex justify-center items-center w-[8rem] h-[3rem] text-[1rem] font-bold text-[#fff] xl:m-4 lg:m-[0.5rem] bg-gradient-to-r from-green-500 to-green-800 border-2 border-[#fff] rounded-lg"
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
          </div>
        </div>
      </nav>
      <ul className="sidenav sidenav-close pt-[3.5rem]" id="mobile-links">
            {[["Home", "/"],
            ["About", "/About"],
            ["Contact", "/Contact"]].map(([text, url]) => (
              <li key={text}>
              <Link
                className={`border border-green-300`}
                to={url}
              >
                {text}
              </Link>
            </li>))}
        {tabs.map((e) =>
          currUser ? (
            <li key={e} onClick={handleLogout}>
              <Link
                value={e}
                className={`${e} border border-green-300`}
                to={e === "Logout" ? "/Login" : "/"}
              >
                {e}
              </Link>
            </li>
          ) : (
              <li key={e} className={e}>
                <Link
                  value={e}
                  className={`${e} border border-green-300`}
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
