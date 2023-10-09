import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated imports
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import { AuthProvider} from "./Auth.js";
import PrivateRoute from "./PrivateRoute";
import Contact from "./Contact";


const App = () => {
  return (
    <AuthProvider>
      <Router> {/* Updated: Use Router instead of BrowserRouter */}
        <div className="bg-[#DDF3DE] font-Poppins">
          <Routes> {/* Updated: Use Routes instead of Route */}
            <Route
            path="/" 
            element={
              <PrivateRoute element={<Home />} />
            }
            />
            <Route
              path="/About"
              element={ // Updated: Use element prop
                <Fragment>
                  <About />
                </Fragment>
              }
            />
            <Route
              path="/Contact"
              element={ // Updated: Use element prop
                <Fragment>
                  <Contact />
                </Fragment>
              }
            />
            <Route
              path="/Login"
              element={ // Updated: Use element prop
                <Fragment>
                  <Navbar tabs={["Sign Up"]} />
                  <Login />
                </Fragment>
              }
            />
            <Route
              path="/Signup"
              element={ // Updated: Use element prop
                <Fragment>
                  <Navbar tabs={["Login"]} />
                  <SignUpForm />
                </Fragment>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
