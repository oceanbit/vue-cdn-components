/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import * as path from 'path';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/client', express.static(path.join(__dirname, '../client')));
app.use('/components', express.static(path.join(__dirname, '../../libs')));

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get('/', function(req, res) {
  res.redirect('/client');
});

app.listen(3000, function() {
  console.log('Twitch auth sample listening on port 3000!');
});
