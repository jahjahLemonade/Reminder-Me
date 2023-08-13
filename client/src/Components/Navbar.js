import React, { useContext, useEffect } from "react";
import "../CSS/Navbar.css";
import bell from "../bell.png";
import { Link } from "react-router-dom";
import { auth } from "firebase/app";
import { AuthContext } from "./Auth.js";
import M from 'materialize-css';

const Navbar = ({ tabs }) => {
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
      <nav className="nav-wrapper">
        <div className="brand-logo">
            <Link to="/About">
              Reminder Me 
            </Link>
          {/* <img className="bell" src={bell} alt="bell" /> */}
        </div>
        <a href="menu-selection" data-target="mobile-links" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
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
            )
          )}
        </ul>
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
