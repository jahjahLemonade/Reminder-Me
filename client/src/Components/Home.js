import React, { useState, useEffect, useContext } from "react";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import firebase from "firebase";
import { AuthContext } from "./Auth.js";
import axios from 'axios'
import { Footer } from "./Footer";
import name from "../assets/name.svg"
import phone from "../assets/phone.svg"
import msg from "../assets/msg.svg"
import date from "../assets/date.svg"
import timing from "../assets/timing.svg"
import timezone from "../assets/timezone.svg"

const Home = () => {
  // const [reminderList, setReminderList] = useState([]);
  const { currUser } = useContext(AuthContext);
  //---> Add form fields into states

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        first_name,
        last_name,
        phone_number,
        time,
        date,
        message,
        // timezone,
      } = e.target.elements;
      //Api call to back-end
      await axios.post('http://localhost:3001/createMessage', {
        name: `${first_name.value} ${last_name.value}`,
        phoneNumber: phone_number.value,
        date: date.value,
        time: time.value,
        message: message.value,
        //timezone: timezone.value,
      }).then(resp => console.log(resp.data))
    } catch (error) {
      console.error("Error: ", error)
    } finally {
      document.getElementById("home").reset();
    }
  };

  const handleClick = (e) => {
    // const id = e.target.parentElement.getAttribute("id");
    console.log("Out of Order")
  };
  useEffect(() => {
    //fetch data/messages from twilio
    // const fetchData = async () => {
    // }
  })

  return (
    <div>
      <div className="px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
        <form className="flex flex-col lg:flex-row  justify-center lg:justify-around bg-[#fff] mt-8 md:mt-20 lg:pt-24 lg:pb-16 rounded-xl" onSubmit={handleSubmit}>
          <div className="w-full px-[0.6rem] | lg:max-w-[32rem] lg:flex lg:flex-col lg:justify-center">
            <div>
              <p className="text-[1.25rem] font-semibold mb-[2.62rem] | md:text-[1.75rem] | lg:text-[2rem]">Add Reminder</p>
              <div>
                <label htmlFor="first_name">First Name</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                  <input type='text' autoComplete="on" placeholder={`Enter first name`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="last_name">Last Name</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                  <input type='text' autoComplete="on" placeholder={`Enter first name`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="contact_number">Cotact</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={phone} />
                  <input type="number" autoComplete="on" placeholder={`Enter Phone number`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="date">Date</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={date} />
                  <input type="text" className="datepicker" autoComplete="on" placeholder={`Select date`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="time">Time</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={timing} />
                  <input type="text" className="timepicker" autoComplete="on" placeholder={`Select time`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="timezone">Time Zone</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={timezone} />
                  <input autoComplete="on" placeholder={`Select time zone`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem]">
                <label htmlFor="signup_password">Message</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={msg} />
                  <input type="text" autoComplete="on" placeholder={`Type here`} required />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[11rem] h-[4rem] text-lg font-semibold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 mx-auto mb-8 border border-[#fff] rounded-xl">
              <button>Create</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      </div>
  );
};
export default Home;
   {/* <div>
            <select defaultValue="Choose Timezone..." required>
              <option value="">Choose Timezone...</option>
              <option value="US/Eastern">US/Eastern</option>
              <option value="US/Central">US/Central</option>
              <option value="US/Mountain">US/Mountain</option>
              <option value="US/Pacific">US/Pacific</option>
              <option value="US/Hawaii">US/Hawaii</option>
              <option value="US/Alaska">US/Alaska</option>
            </select>
            <label>Timezone</label>
          </div>
        <div>
          <div>
            <textarea
              className="materialize-textarea"
              data-length="50"
              required
            ></textarea>
            <label htmlFor="message">
              Remind me to...
              </label>
          </div> */}
      {/* comment out if you need to see the page without a reminder */}
      {/* <ul>
        <div className="w-full">
          <button className="cross" onClick={handleClick}>
            X
              </button>
          <li id="name">Receiver: {'Joe Brown'}</li>
          <li id="arrivalTime">Arrival Time: {'12:00AM'}</li>
          <br />
          <li id="phoneNum">Phone #: {'123-456-7897'}</li>
          <li id="tz">Receiver's TZ: {'Eastern'}</li>
          <br />
          <li id="dateCreated">Date Created: {'12/31/2099'}</li>
          <li id="sms">Message: {'Hello World'}</li>
        </div>
      </ul>
    </div> */}