import React, { useState, useEffect, useContext, useRef } from "react";
import "../CSS/Home.css";
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
  const formRef = useRef()
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
      formRef.current.reset()
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
      <div className="flex flex-col border-4 border-red-800 px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] | lg:px-[1.25rem] | xl:px-[9.75rem]">
        <div className="border-4 border-purple-500 bg-[#fff] flex flex-col mt-8 | md:mt-20 | lg:flex-row | xl:justify-center ">
        <form ref={formRef} className="border-4 border-yellow-500 flex flex-col w-full justify-center rounded-xl | lg:pt-20 lg:pb-16 lg:flex-row lg:justify-around | xl:max-w-[35rem]" onSubmit={handleSubmit}>
          <div className="w-full px-[0.6rem] | lg:max-w-[32rem] lg:flex lg:flex-col lg:justify-center">
            <div>
              <p className="text-[1.25rem] font-semibold mb-[2.2rem] | md:text-[1.75rem] | lg:text-[2rem] lg:mt-0">Add Reminder</p>
              <div className="lg:flex lg:flex-row | lg:justify-between">
                <div>
                  <label htmlFor="first_name">First Name</label>
                  <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                    <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                    <input type='text' autoComplete="on" placeholder={`Enter first name`} required />
                  </div>
                </div>
                <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                  <label htmlFor="last_name">Last Name</label>
                  <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                    <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                    <input type='text' autoComplete="on" placeholder={`Enter first name`} required />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-row | lg:justify-between">
                <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                  <label htmlFor="contact_number">Contact</label>
                  <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                    <img className="w-8 pr-[0.7rem]" src={phone} />
                    <input type="number" autoComplete="on" placeholder={`Enter Phone number`} required />
                  </div>
                </div>
                <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                  <label htmlFor="date">Date</label>
                  <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                    <img className="w-8 pr-[0.7rem]" src={date} />
                    <input type="text" className="datepicker" autoComplete="on" placeholder={`Select date`} required />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-row | lg:justify-between">
              <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                <label htmlFor="time">Time</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={timing} />
                  <input type="text" className="timepicker" autoComplete="on" placeholder={`Select time`} required />
                </div>
              </div>
              <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                <label htmlFor="timezone">Time Zone</label>
                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                  <img className="w-8 pr-[0.7rem]" src={timezone} />
                  {/* <input autoComplete="on" placeholder={`Select time zone`} required /> */}
                  <select defaultValue="Choose Timezone..." required>
                    <option value="">Choose Timezone...</option>
                    <option value="US/Eastern">US/Eastern</option>
                    <option value="US/Central">US/Central</option>
                    <option value="US/Mountain">US/Mountain</option>
                    <option value="US/Pacific">US/Pacific</option>
                    <option value="US/Hawaii">US/Hawaii</option>
                    <option value="US/Alaska">US/Alaska</option>
                  </select>
                </div>
              </div>
              </div>
              <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                <label htmlFor="signup_password">Message</label>
                <div className="flex w-full h-[7.5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
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
        <div className="flex flex-col border border-red-300 w-full mt-[1.25rem] items-center | lg:mt-20 lg:max-w-[35rem] | xl:ml-24">
          <div className="border border-blue-300 w-full max-w-[30rem] flex flex-col justify-around px-4 h-[13rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg mb-[1.25rem]">
            <button className="cross ml-auto" onClick={handleClick}>
              X
              </button>
            <li id="name">Receiver: {'Joe Brown'}</li>
            <li id="arrivalTime">Arrival Time: {'12:00AM'}</li>
            <li id="phoneNum">Phone #: {'123-456-7897'}</li>
            <li id="tz">Receiver's TZ: {'Eastern'}</li>
            <li id="dateCreated">Date Created: {'12/31/2099'}</li>
            <li id="sms">Message: {'Hello World'}</li>
          </div>
          <div className="border border-blue-300 w-full max-w-[30rem] md:max-w-[30rem] mb-[1.25rem] flex flex-col justify-around px-4 h-[13rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg">
            <button className="cross ml-auto" onClick={handleClick}>
              X
              </button>
            <li id="name">Receiver: {'Joe Brown'}</li>
            <li id="arrivalTime">Arrival Time: {'12:00AM'}</li>
            <li id="phoneNum">Phone #: {'123-456-7897'}</li>
            <li id="tz">Receiver's TZ: {'Eastern'}</li>
            <li id="dateCreated">Date Created: {'12/31/2099'}</li>
            <li id="sms">Message: {'Hello World'}</li>
          </div>
        </div>
      </div>
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
