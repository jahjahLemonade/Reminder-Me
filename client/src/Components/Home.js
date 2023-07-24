import React, { useState, useEffect, useContext } from "react";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import Rotate from "./Rotate";
import firebase from "./firebase";
import { AuthContext } from "./Auth.js";

const Home = () => {
  const [reminderList, setReminderList] = useState([]);
  const { currUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      phone_number,
      time,
      date,
      message,
      timezone,
    } = e.target.elements;
    //Api call to back-end
    fetch('https://reminder-me-api.onrender.com/createMessage', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: `${first_name.value} ${last_name.value}`,
        phoneNumber: phone_number.value,
        date: date.value,
        time: time.value,
        message: message.value,
        //timezone: timezone.value,
      })
    })
      .then(response => console.log(response.json()))
      .then(data => {
        // Handle the response data here
        console.log("FE ->",data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch call
        console.error('Error:', error);
      });
    document.getElementById("home").reset();
  };

  const handleClick = (e) => {
    const id = e.target.parentElement.getAttribute("id");
    firebase.firestore().collection("reminders").doc(id).delete();
  };
  useEffect(() => {
    //fetch data from twilio
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
        <ul className="reminders">
          {reminderList.map((e, i) => (
            <div className="scheduledReminder" key={e.id} id={e.id}>
              <button className="cross" onClick={handleClick}>
                X
              </button>
              <li id="name">Receiver: {e.name}</li>
              <li id="arrivalTime">Arrival Time: {e.time}</li>
              <br />
              <li id="phoneNum">Phone #: {e.phoneNumber}</li>
              <li id="tz">Receiver's TZ: {e.timezone}</li>
              <br />
              <li id="dateCreated">Date Created: {e.date}</li>
              <li id="freq">Repeat: {e.frequency}</li>
              <br />
              <li id="sms">Message: {e.message}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
