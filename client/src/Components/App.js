import React, { Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Rotate from "./Rotate";
import SignUpForm from "./SignUpForm";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import { AuthProvider } from "./Auth";
import PrivateRoute  from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route
            exact
            path="/Login"
            render={() => (
              <Fragment>
                <Navbar tabs={["Sign Up"]} />
                <Rotate style={{ marginLeft: "auto",  marginRight: "auto"}} />
                <Login />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/About"
            render={() => (
              <Fragment>
                <About />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/Signup"
            render={() => (
              <Fragment>
                <Navbar tabs={["Login"]} />
                <Rotate style={{ marginLeft: "auto",  marginRight: "auto"}} />
                <SignUpForm />
              </Fragment>
            )}
          />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
