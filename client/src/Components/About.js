import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import about from "../assets/about.png";
import { Footer } from "./Footer";


const About = () => {
  const { currUser } = useContext(AuthContext);
  let aboutPageTabs = ["Home", "Logout"];
  if (!currUser) {
    aboutPageTabs = ["Sign Up", "Login"];
  }
  return (
    <div>
      <div className="flex flex-col justify-center lg:flex-row lg:items-center  px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
        <div className="flex flex-col lg:flex-row lg:mt-24">
        <div className="lg:order-last lg:flex lg:max-xl:items-center lg:pb-16"><img className="shrink-0 w-full md:h-[33rem] lg:h-[25rem] xl:h-[35rem]" src={about} /></div>
        <div>
        <div className="font-poppins text-2xl md:text-5xl xl:text-[4rem] font-bold"><p>About This <span className="block text-[#2F8331]">Application</span></p></div>
        <br />
        <div className="w-full text-xl md:max-w-[34rem] md:leading-9">
          <p className="text-lg">
            Do You Have A Habit of Forgetting Stuff? Don't Worry!!!
          Here's <b>Reminder Me</b> to The Rescue.</p>
          <br />

          <p>
            <b>Reminder Me</b> is a reminder management application
          that lets you send reminders through text message.
          It lets you set a time/duration and a message for your
          reminder. And makes sure that it's sending out right on
          time, not letting you or your friends miss out on the
          important things in life.
        </p>
        </div>

          <br />
          <p className="text-lg md:text-2xl font-semibold underline">Tech Stack</p>
          <div>
            <p className="text-lg md:text-2xl font-[300]">
              <span className="text-lg md:text-2xl font-[500]">Front-End:</span> <p>React, Tailwind</p>
            </p>
            <br />
            <p className="text-lg md:text-2xl font-[300]">
              <span className="text-lg md:text-2xl font-[500]">Back-End:</span> <p>Node.js, Firebase, Twilio API</p>
            </p>
          </div>
          {/* <br />
          <p className="text-lg md:text-2xl font-[500]">
            Link to repo:
          <a
              href="https://github.com/jspades93/Reminder-Me"
              target="_blank4"
              rel="noopener noreferrer"
              className="waves-effect waves-light btn-flat"
            >
              <i className="fa fa-github" style={{ fontSize: "3rem" }}></i>
            </a>
          </p> */}
          </div>
          </div>
      </div>
      <Footer />
    </div >
  );
};

export default About;
