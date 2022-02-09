// var twilio = require('twilio');
// import { TWILIO_ACCOUNT_SID,  TWILIO_AUTH_TOKEN } from './twilio_config';

// var client = new twilio({TWILIO_ACCOUNT_SID}, {TWILIO_AUTH_TOKEN});

const express = require('express');
const dotenv = require('dotenv');
const app = new express();
const port = process.env.PORT || 4000;
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

instance.payments.fetch(paymentId)

// Send the text message.
// client.messages.create({
//   to: 'YOUR_NUMBER',
//   from: 'YOUR_TWILIO_NUMBER',
//   body: 'Hello from Twilio!'
// });

app.listen(port, () => 
console.log(`Listening on port ${port}`))

app.get('/backend', (req, res) => {
  res.send({express: 'YOUR BACKEND IS CONNECTED'})
});