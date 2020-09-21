import React, { useContext } from "react";
import "../CSS/Navbar.css";
import bell from "../bell.png";
import { Link } from "react-router-dom";
import { auth } from "firebase/app";
import { AuthContext } from "./Auth.js";

const Navbar = ({ tabs }) => {
  const { currUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/About" className="brand-logo">
          Reminder Me
        </Link>
        <img className="bell" src={bell} alt="bell" />
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {tabs.map((e) =>
            currUser ? (
              <li
                key={e}
                onClick={(e) =>
                  e.target.innerText === "Logout" ? auth().signOut() : ""
                }
              >
                <Link
                  value={e}
                  to={e === "UserInfo" ? "/" : e === "Logout" ? "/Login" : "/"}
                >
                  {e}
                </Link>
              </li>
            ) : (
              <li
                key={e}
                onClick={(e) =>
                  e.target.innerText === "Logout" ? auth().signOut() : ""
                }
              >
                <Link
                  value={e}
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
      </div>
    </nav>
  );
};

export default Navbar;
