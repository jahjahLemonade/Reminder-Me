require("dotenv").config();
const path = require("path");
const cors = require('cors');
const twilio = require("twilio");
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_KEY
);
const nodemailer = require("nodemailer")
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


const firebase = require("firebase/app");
const { collection, deleteDoc, query, where, getDocs } = require("firebase/firestore");

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
function convertToUTC(inputDate, inputTime, inputTimezone) {
  // Define a mapping of timezone options to their respective offsets in minutes
  const timezoneOffsets = {
    "US/Eastern": -300, // UTC-5
    "US/Central": -420, // UTC-6
    "US/Mountain": -420, // UTC-7
    "US/Pacific": -480, // UTC-8
    "US/Hawaii": -600, // UTC-10
    "US/Alaska": -540, // UTC-9
  };

  // Create a new Date object using the provided date and time
  const dateTimeString = `${inputDate} ${inputTime}`;
  const localDate = new Date(dateTimeString);

  // Get the offset for the specified timezone
  const timezoneOffset = timezoneOffsets[inputTimezone];

  // Calculate the UTC time in milliseconds since January 1, 1970
  const utcTime = localDate.getTime() - (localDate.getTimezoneOffset() + timezoneOffset) * 60000;

  // Create a new Date object with the UTC time
  const utcDate = new Date(utcTime);

  return utcDate;
}

app.post('/createMessage', (req, res) => {
  // Call the desired function here
  try {
    console.log('-->', req.body)
    const {
      name,
      phoneNumber,
      time,
      date,
      message,
      timezone,
      ID
    } = req.body
    const fetchData = async () => {
      const inputDate = date;
      const inputTime = time;
      const inputTimezone = timezone; // Change this to your desired timezone

      const utcDate = convertToUTC(inputDate, inputTime, inputTimezone);

      console.log("time -->", utcDate.toISOString());
      console.log('ph -->', phoneNumber)

      await client.messages.create(
        {
          from: process.env.TWILIO_NUMBER,
          messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
          body: `${message}`,
          sendAt: utcDate.toISOString(),
          scheduleType: 'fixed',
          to: phoneNumber,
        },
        async (err, message) => {
          if (err) {
            console.log("Error -> ", err);
            return;
          }
          console.log("BE MSG --> ", message.body);
          console.log("id --> ", ID);

          // const q = query(collection("reminders"), where("ID", "==", ID));

          // try {
          //   const querySnapshot = await getDocs(q);
          //   querySnapshot.forEach(async (doc) => {
          //     // Delete the document using the deleteDoc function
          //     await deleteDoc(doc.ref);
          //     console.log('Document deleted successfully');
          //   });
          // } catch (error) {
          //   console.error("Error deleting document:", error);
          // }
        }
      ).catch((err) => console.error("Error:", err))
      .done();
    }
    fetchData();
    // Send a response back to the frontend
    console.log(res.json({ message: 'BE --> Function triggered successfully' }))
  } catch (err) {
    console.error("Error: ", err)
  }
});

// Configure nodemailer to send emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post('/sendEmail', (req, res) => {
  const { email, name, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: 'Contact Form Submission',
    text: `Email: ${email}\nName: ${name}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

var server = app.listen(process.env.PORT || 3001, () => {
  console.log("Listening on port %d", server.address().port);
});
