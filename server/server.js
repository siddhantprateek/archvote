var twilio = require('twilio');
import { TWILIO_ACCOUNT_SID,  TWILIO_AUTH_TOKEN } from './twilio_config';

var client = new twilio({TWILIO_ACCOUNT_SID}, {TWILIO_AUTH_TOKEN});

// Send the text message.
client.messages.create({
  to: 'YOUR_NUMBER',
  from: 'YOUR_TWILIO_NUMBER',
  body: 'Hello from Twilio!'
});