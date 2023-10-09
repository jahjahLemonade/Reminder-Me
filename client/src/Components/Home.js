import React, { useState, useEffect, useContext, useRef } from "react";
import "../CSS/Home.css";
import { db, collection, addDoc } from "./firebase";
import { AuthContext } from "./Auth.js";
import nextId, {setPrefix} from "react-id-generator"
import axios from 'axios'
import { Footer } from "./Footer";
import name from "../assets/name.svg"
import phone from "../assets/phone.svg"
import msg from "../assets/msg.svg"
import datee from "../assets/date.svg"
import timing from "../assets/timing.svg"
import timezone from "../assets/timezone.svg"
import { query, where } from "firebase/firestore";

const Home = () => {
  const [reminderList, setReminderList] = useState([])
  const formRef = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const number = useRef()
  const time = useRef()
  const date = useRef()
  const message = useRef()
  const timezonee = useRef()

  const { currUser } = useContext(AuthContext);
  setPrefix(`${currUser.email}-reminder-me-id-`)
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(firstname.current, lastname.current, number.current, date.current, time.current, message.current, timezonee.current)
      const reminders = collection(db, "reminders")
      const ID = nextId()
      //Add reminder
      const docRef = await addDoc(reminders, {
        name: `${firstname.current.value} ${lastname.current.value}`,
        phoneNumber: number.current.value,
        date: date.current.value,
        time: time.current.value,
        message: message.current.value,
        timezone: timezonee.current.value,
        userEmail: currUser.email,
        ID: ID
      });
      console.log("Reminder Added!!!")

      //Get Reminders and add id
      // realtime collection data
      // onSnapshot(reminders, (snapshot) => {
      //   let r = []
      //   snapshot.docs.forEach(async (d) => {
      //     if (d.data().justAdded === true) {
      //       await updateDoc(doc(db, "reminders", d.id), {
      //         justAdded: false
      //       });
      //       console.log(ID)
      //     }
      //     r.push({ ...d.data(), id: d.id });
      //   })
      // })

      //Create Reminder
      await axios.post('https://reminder-me-api.onrender.com/createMessage', {
        name: `${firstname.current.value} ${lastname.current.value}`,
        phoneNumber: number.current.value,
        date: date.current.value,
        time: time.current.value,
        message: message.current.value,
        timezone: timezonee.current.value,
        ID: ID
      })
    } catch (error) {
      console.error("Error: ", error)
    } finally {
      formRef.current.reset()
    };
  }

  const handleClick = (e) => {
    // const id = e.target.parentElement.getAttribute("id");
    collection("reminders").doc(ID).delete();
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = query(collection("reminders"), where("userEmail", "==", currUser.email))
  //     setReminderList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
    // fetchData();
    // //delete removed
    // const unsubscribe = collection("reminders").onSnapshot((snapshot) => {
    //   const list = [];
    //   snapshot.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
    //   setReminderList(list);
    // });
    // return unsubscribe;
  // },[]);

  return (
    <div>
      <div className="flex flex-col px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] | lg:px-[1.25rem] | xl:px-[9.75rem]">
        <div className="bg-[#fff] flex flex-col mt-8 | md:mt-20 | lg:flex-row | xl:justify-center ">
          <form ref={formRef} className="flex flex-col w-full justify-center rounded-xl | lg:pt-20 lg:pb-16 lg:flex-row lg:justify-around | xl:max-w-[35rem]" onSubmit={handleSubmit}>
            <div className="w-full px-[0.6rem] | lg:max-w-[32rem] lg:flex lg:flex-col lg:justify-center">
              <div>
                <p className="text-[1.25rem] font-semibold mb-[2.2rem] | md:text-[1.75rem] | lg:text-[2rem] lg:mt-0">Add Reminder</p>
                <div className="lg:flex lg:flex-row | lg:justify-between">
                  <div>
                    <label htmlFor="first_name">First Name</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                      <input type='text' ref={firstname} autoComplete="on" placeholder={`Enter first name`} required />
                    </div>
                  </div>
                  <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                    <label htmlFor="last_name">Last Name</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-[2.2rem] pr-[0.7rem]" src={name} />
                      <input type='text' ref={lastname} autoComplete="on" placeholder={`Enter first name`} required />
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:flex-row | lg:justify-between">
                  <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                    <label htmlFor="contact_number">Contact</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-8 pr-[0.7rem]" src={phone} />
                      <input type="number" ref={number} autoComplete="on" placeholder={`Enter Phone number`} required />
                    </div>
                  </div>
                  <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                    <label htmlFor="date">Date</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-8 pr-[0.7rem]" src={datee} />
                      <input type="text" ref={date} className="datepicker" autoComplete="on" placeholder={`Select date`} required />
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:flex-row | lg:justify-between">
                  <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                    <label htmlFor="time">Time</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-8 pr-[0.7rem]" src={timing} />
                      <input type="text" ref={time} className="timepicker" autoComplete="on" placeholder={`Select time`} required />
                    </div>
                  </div>
                  <div className="mt-8 mb-[1.25rem] | lg:mt-0">
                    <label htmlFor="timezonee">Time Zone</label>
                    <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                      <img className="w-8 pr-[0.7rem]" src={timezone} />
                      {/* <input autoComplete="on" placeholder={`Select time zone`}  /> */}
                      <select ref={timezonee} defaultValue="Choose Timezone..." required>
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
                    <input ref={message} type="text" autoComplete="on" placeholder={`Type here`} required />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-[11rem] h-[4rem] text-lg font-semibold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 mx-auto mb-8 border border-[#fff] rounded-xl">
                <button className="w-full">Create</button>
              </div>
            </div>
          </form>
          <div className="flex flex-col w-full mt-[1.25rem] items-center | lg:mt-20 lg:max-w-[35rem] | xl:ml-24">
            <div className="w-full max-w-[30rem] flex flex-col justify-around px-4 h-[13rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg mb-[1.25rem]">
              <p>Reminders must be 15 mins ahead of current time and <br/> must be
              less than 7 days or reminder will go out immediately </p>
              {reminderList.map((e, i) => (
                <div ref={ID} className="border border-blue-300" key={e.id}>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home
