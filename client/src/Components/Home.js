import React, { useState, useEffect, useContext } from "react";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import Rotate from "./Rotate";
import firebase from "firebase";
import { AuthContext } from "./Auth.js";
import axios from 'axios'

const Home = () => {
  // const [reminderList, setReminderList] = useState([]);
  const { currUser } = useContext(AuthContext);
  //Add form field into state

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
      await axios.post('https://reminder-me-api.onrender.com/createMessage', {
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
      <Navbar tabs={["UserInfo", "Logout"]} />
      <div className="home-page">
        <form id="home" className="col s12" onSubmit={handleSubmit}>
          <Rotate />
          <div className="row">
            <div className="input-field col s2">
              <input
                id="first_name"
                type="text"
                className="validate"
                required
              />
              <label id="first_name" htmlFor="first_name">
                First Name
              </label>
            </div>
            <div className="input-field col s2">
              <input id="last_name" type="text" className="validate" required />
              <label id="last_name" htmlFor="last_name">
                Last Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2">
              <input
                id="phone_number"
                type="text"
                className="validate"
                required
              />
              <label id="phone_number" htmlFor="phone_number">
                Phone Number
              </label>
            </div>
            <div className="input-field col s2">
              <input id="date" type="text" className="datepicker" required />
              <label id="date" htmlFor="date">
                Date
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2">
              <input id="time" type="text" className="timepicker" required />
              <label id="time" htmlFor="time">
                Time
              </label>
            </div>
            <div id="timezone" className="input-field col s2">
              <select id="timezone" defaultValue="Choose Timezone..." required>
                <option value="">Choose Timezone...</option>
                <option value="US/Eastern">US/Eastern</option>
                <option value="US/Central">US/Central</option>
                <option value="US/Mountain">US/Mountain</option>
                <option value="US/Pacific">US/Pacific</option>
                <option value="US/Hawaii">US/Hawaii</option>
                <option value="US/Alaska">US/Alaska</option>
              </select>
              <label id="timezone">Timezone</label>
            </div>
          </div>
          <div id="freq" className="row">
            <div className="input-field col s5">
              <textarea
                id="message"
                className="materialize-textarea"
                data-length="50"
                required
              ></textarea>
              <label id="message" htmlFor="message">
                Remind me to...
              </label>
            </div>
          </div>
          <div
            className="create_button">
            <button
              id="create"
              className="waves-effect waves-light btn-large"
            >
              Create
            </button>
          </div>
        </form>
        {/* comment out if you need to see the page without a reminder */}
        <ul className="reminders">
            <div className="scheduledReminder">
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
      </div>
    </div>
  );
};
export default Home;
