// var twilio = require('twilio');
// import { TWILIO_ACCOUNT_SID,  TWILIO_AUTH_TOKEN } from './twilio_config';

// var client = new twilio({TWILIO_ACCOUNT_SID}, {TWILIO_AUTH_TOKEN});

const express = require('express');
const app = new express();
const port = process.env.PORT || 4000;
var models = require('express-cassandra');

// Send the text message.
// client.messages.create({
//   to: 'YOUR_NUMBER',
//   from: 'YOUR_TWILIO_NUMBER',
//   body: 'Hello from Twilio!'
// });

models.setDirectory( __dirname + '/models').bind(
  {
      clientOptions: {
          contactPoints: ['127.0.0.1'],
          localDataCenter: 'dc1',
          protocolOptions: { port: 9042 },
          keyspace: 'mykeyspace',
          queryOptions: {consistency: models.consistencies.one}
      },
      ormOptions: {
          defaultReplicationStrategy : {
              class: 'SimpleStrategy',
              replication_factor: 1
          },
          migration: 'safe'
      }
  },
  function(err) {
      if(err) throw err;

      // You'll now have a `person` table in cassandra created against the model
      // schema you've defined earlier and you can now access the model instance
      // in `models.instance.Person` object containing supported orm operations.
  }
);


app.listen(port, () => 
console.log(`Listening on port ${port}`))

app.get('/backend', (req, res) => {
  res.send({express: 'YOUR BACKEND IS CONNECTED'})
});