import React, {useContext} from "react";
import "../CSS/About.css";
import Navbar from "./Navbar";
import { AuthContext } from "./Auth";


const About = () => {
  const { currUser } = useContext(AuthContext);
  let aboutPageTabs = ["Home", "Logout"];
  if (!currUser) {
    aboutPageTabs = ["Sign Up", "Login"];
  }
  return (
    <div className="about-page">
      <Navbar tabs={aboutPageTabs}/>
      <header>
        <div className="title">
          <h1>Reminder Me</h1>
          <p>Scroll for more!</p>
        </div>
      </header>
      <div className="about-this-app">
        <div className="header"><h6 className="about-this-app-header">About This Application</h6></div>
        <div className="about-app">
          <p className="description">
          Do You Have A Habit of Forgetting Stuff? Don't Worry!!!
          <br />
          Here's <b>Reminder Me</b> to The Rescue.
        </p>
        </div>
        <div className="about-app">
        <p className="description">
          <b>Reminder Me</b> is a reminder management application
          <br />
          that lets you send reminders through text message.
          <br />
          It lets you set a time/duration and a message for your
          <br />
          reminder. And makes sure that it's sending out right on
          <br />
          time, not letting you or your friends miss out on the
          <br />
          important things in life.
        </p>
        </div>
       
        <h6 className="tech-stack-header">Tech Stack</h6>
        <div>
        <h6 className="tech-stack">
           Front-End: <p className="tech">React, Materialize, Font-Awesome</p>
         </h6>
         <h6 className="tech-stack">
           Back-End: <p className="tech">Express.js, Firebase, Node.js, Twilio</p>
         </h6>
        </div>
        <h6 className="link-to">
          Link to:
          <a
            href="https://github.com/jspades93/Reminder-Me"
            target="_blank4"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn-flat"
          >
            <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
          </a>
        </h6>
      </div>
    </div>
  );
};

export default About;
