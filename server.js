require("dotenv").config();
const path = require("path");
const cors = require('cors');
const twilio = require("twilio");
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_KEY 
);

const express = require("express");
const app = express();

app.use(cors())

const firebase = require("firebase/app");
require("firebase/firestore");

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN, 
  databaseURL: process.env.DB_URL,
  projectId: "reminder-app-4be61",
  storageBucket: "reminder-app-4be61.appspot.com",
  messagingSenderId: "830815988398",
  appId: "1:830815988398:web:597257d987ea63668a9b3f",
  measurementId: "G-T600ZD0201",
};
firebase.initializeApp(config);

const timeFactory = (hour, midday) => {
  if (midday === "AM" && hour === "12") {
    hour = "00";
  } else if (midday === "PM" && hour === "12") {
    hour = "12";
  } else if (midday === "PM" && Number(hour) < 12) {
    hour = Number(hour) + 12;
  } else if (midday === "AM" && Number(hour) < 12) {
    if (hour[0] === "0") {
      hour = 0 + Number(hour);
      hour = "0" + String(hour);
    } else {
      hour = 0 + Number(hour);
    }
  }
  return String(hour);
};
year = ""
month = ""
day = ""
const dateFactory = (date) => {
    console.log('date -->',date)
    const dateObj = new Date(date);
    day = dateObj.getDate();
    console.log('day -->',day)
    month = dateObj.getMonth()+1;
    console.log('month -->',month)
    year = dateObj.getFullYear();
    console.log('year -->',year)
};
app.post('*/createMessage', (req, res) => {
  // Call the desired function here
  try {
    const {
      name,
      phoneNumber,
      time,
      date,
      message,
      //timezone *should be used in conversion
    } = req.body
    const fetchData = async () => {
      let timeframe = time.slice(6, 8);
      let minute = time.slice(3, 5);
      let hour = time.slice(0, 2);
      hour = timeFactory(hour, timeframe);
      dateFactory(date)
      //UTC conversion func
      const localDate = new Date(year, month - 1, day, hour, minute);
      const utcDate = new Date(localDate.toLocaleString("en-US", { timeZone: "UTC" }));

      console.log("local -->",localDate, "utc -->", utcDate);
      console.log('ph -->',phoneNumber)
      client.messages.create(
        {
          messagingServiceSid: 'MG56cc572d1616f74cd2c5001b58ac663a',
          body: `Hello ${name},\n ${message}`,
          sendAt: utcDate.toISOString(),
          scheduleType: 'fixed',
          to: phoneNumber,
        }
        ,
        (err, message) => {
          console.log("BE MSG --> ",message.body);
          console.log("Error -> ",err);

        }
      ).then(message => console.log(message))
    }
    fetchData();
    // Send a response back to the frontend
    console.log(res.json({ message: 'BE --> Function triggered successfully' }))
  } catch (err) {
    console.error("Error: ",err)
  }
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

var server = app.listen(process.env.PORT || 3001, () => {
  console.log("Listening on port %d", server.address().port);
});
