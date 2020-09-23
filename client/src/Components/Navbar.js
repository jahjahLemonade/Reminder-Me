import React, { useContext } from "react";
import "../CSS/Navbar.css";
import bell from "../bell.png";
import { Link, Redirect} from "react-router-dom";
import { auth } from "firebase/app";
import { AuthContext } from "./Auth.js";

//Home page flashes when logging out on About page
const Navbar = ({ tabs }) => {
  const { currUser } = useContext(AuthContext);
  const handleLogout = async (e) => {
    if(e.target.innerText === "Logout") {
      await auth().signOut()
    }
    return <Redirect to="/Login" />
  }
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
                onClick={handleLogout}
              >
                <Link
                  value={e}
                  className={e}
                  to={e === "Logout" ? "/Login" : "/"}
                >
                  {e}
                </Link>
              </li>
            ) : (
              <li
                key={e}
                className={e}
                onClick={(e) =>
                  e.target.innerText === "Logout" ? auth().signOut() : ""
                }
              >
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
      </div>
    </nav>
  );
};

export default Navbar;
