require('dotenv').config()

const twilio = require('twilio')
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN)

const cronJob = require('cron').CronJob;

const MessagingResponse = twilio.twiml.MessagingResponse;

const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
  
const firebase = require("firebase/app");
require("firebase/firestore");

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "reminder-app-4be61.firebaseapp.com",
  databaseURL: "https://reminder-app-4be61.firebaseio.com/",
  projectId: "reminder-app-4be61",
  storageBucket: "reminder-app-4be61.appspot.com",
  messagingSenderId: "830815988398",
  appId: "1:830815988398:web:597257d987ea63668a9b3f",
  measurementId: "G-T600ZD0201",
};
firebase.initializeApp(config);

const db = firebase.firestore();

const timeFactory = (hour, midday) =>{
  if(midday === 'AM' && hour === '12') {
    hour = '00'
  }
  else if(midday === 'PM' && hour === '12') {
    hour = '12'
  }
  else if(midday === 'PM' && Number(hour) < 12) {
    hour = Number(hour) + 12
  }
  else if(midday === 'AM' && Number(hour) < 12) {
    if(hour[0] === '0') {
      hour = 0 + Number(hour)
      hour = '0' + String(hour)
    } else {
      hour = 0 + Number(hour)
    }
  }
  return String(hour)
}
const setReminderFrequency = (freq, date, id) => {
  if('Once' === freq) {
    let dayOfTheWeek = new Date(date)
    let day = dayOfTheWeek.getDay()
    let dayOfTheMonth = date.slice(4, 6)
    let monthOfTheYear = date.slice(0, 3)
    db.collection('reminders').doc(id).delete()
    return [dayOfTheMonth, monthOfTheYear, String('0' + day)]
  }
  else if('Daily' === freq) {
    return ['*', '*', '*']
  }
  else if('Weekly' === freq) {
    let dayOfTheWeek = new Date(date)
    let day = dayOfTheWeek.getDay()
    return ['*', '*', String('0' + day)]
  }
  else if('Monthly' === freq) {
    let dayOfTheMonth = date.slice(4, 6)
   return [dayOfTheMonth, '*', '*']
  }
  else if('Yearly' === freq) {
    let monthOfTheYear = date.slice(0, 3)
    return ['*', monthOfTheYear, '*']
  }
}

  const fetchData = async () => {
    const numbers = [];
    const data = await db.collection('reminders').get()
    data.docs.map( doc => numbers.push({ ...doc.data(), id: doc.id }))
    for (let reminder of numbers) {
      let timeframe = reminder.time.slice(6, 8);
      let minute = reminder.time.slice(3, 5);
      let hour = reminder.time.slice(0, 2);
      hour = timeFactory(hour, timeframe);
      let frequency = setReminderFrequency(
        reminder.frequency,
        reminder.date,
        reminder.id
      );;
      var textJob = new cronJob(
        `${minute} ${hour} ${frequency[0]} ${frequency[1]} ${frequency[2]}`,
        () => {
          client.messages.create(
            {
              to: reminder.phoneNumber,
              from: "4104691056",
              body: reminder.message,
            },
            (err, message) => {
              console.log(message.body);
            }
          );
        },
        null,
        true, reminder.timezone
      );
    }
  }
  fetchData()
  
// app.post('/message', function (req, res) {
//     var resp = new MessagingResponse();
//     if( req.body.Body.trim().toLowerCase() === 'subscribe' ) {
//       var fromNum = req.body.From;
//       if(numbers.indexOf(fromNum) !== -1) {
//         resp.message('You already subscribed!');
//       } else {
//         resp.message('Thank you, you are now subscribed. Reply "STOP" to stop receiving reminders.');
//         usersRef.push(fromNum);
//       }
//     } else {
//       resp.message('Welcome to Daily Reminder By Joshua. Text "Subscribe" to receive daily reminders.');
//     }
  
//     res.writeHead(200, {
//       'Content-Type':'text/xml'
//     });
//     res.end(resp.toString());
  
//   });

  var server = app.listen(3001, function() {
    console.log('Listening on port %d', server.address().port);
  });

