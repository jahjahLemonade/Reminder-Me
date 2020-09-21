import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import M from "materialize-css";
import Navbar from "./Navbar";
import Rotate from "./Rotate";
import firebase from "./firebase";

const Home = () => {
  const [reminderList, setReminderList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      phone_number,
      time,
      date,
      frequency,
      message,
      timezone,
    } = e.target.elements;
    firebase
      .firestore()
      .collection("reminders")
      .add({
        name: `${first_name.value} ${last_name.value}`,
        phoneNumber: phone_number.value,
        date: date.value,
        time: time.value,
        frequency: frequency.value,
        message: message.value,
        timezone: timezone.value,
      });
    first_name.value = "";
    last_name.value = "";
    phone_number.value = "";
    time.value = "";
    date.value = "";
    message.value = "";
  };

  const handleClick = (e) => {
    const id = e.target.parentElement.getAttribute("id");
    firebase.firestore().collection("reminders").doc(id).delete();
  };

  useEffect(() => {
    M.AutoInit();
    let input = document.getElementById("message");
    M.CharacterCounter.init(input);
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const fetchData = async () => {
      const data = await db.collection("reminders").get();
      setReminderList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
    //delete removed
    const unsubscribe = db.collection("reminder").onSnapshot((snapshot) => {
      const list = [];
      snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
      setReminderList(list);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <Navbar tabs={["Logout"]} />
      <form id="home"className="col s12" onSubmit={handleSubmit}>
        <Rotate style={{ marginLeft: "255px" }} />
        <div className="row">
          <div className="input-field col s2">
            <input id="first_name" type="text" className="validate" />
            <label id="first_name" htmlFor="first_name">
              First Name
            </label>
          </div>
          <div className="input-field col s2">
            <input id="last_name" type="text" className="validate" />
            <label id="last_name" htmlFor="last_name">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s2">
            <input id="phone_number" type="text" className="validate" />
            <label id="phone_number" htmlFor="phone_number">
              Phone Number
            </label>
          </div>
          <div className="input-field col s2">
            <input id="date" type="text" className="datepicker" />
            <label id="date" htmlFor="date">
              Date
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s2">
            <input id="time" type="text" className="timepicker" />
            <label id="time" htmlFor="time">
              Time
            </label>
          </div>
          <div id="timezone" className="input-field col s2">
            <select id="timezone" defaultValue="Choose Timezone...">
              <option disabled>Choose Timezone...</option>
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
          <div className="input-field col s2">
            <select id="frequency" defaultValue="Choose Frequency...">
              <option disabled>Choose Frequency...</option>
              <option value="Once">Once</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <label id="frequency">Frequency</label>
          </div>
          <div className="input-field col s5">
            <textarea
              id="message"
              className="materialize-textarea"
              data-length="50"
            ></textarea>
            <label id="message" htmlFor="message">
              Remind me to...
            </label>
          </div>
        </div>
        <div style={{ marginLeft: "230px" }}>
          <button
            style={{ backgroundColor: "#056674", marginBottom:"20px" }}
            className="waves-effect btn-large"
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
            <li>Receiver: {e.name}</li>
            <li>Phone Number: {e.phoneNumber}</li>
            <li>Date Created: {e.date}</li>
            <li>Arrival Time: {e.time}</li>
            <li>Receiver's TZ: {e.timezone}</li>
            <li>Freq: {e.frequency}</li>
            <li>Message: {e.message}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Home;
