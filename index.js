const express = require('express');
const slowDown = require('express-slow-down');

const PORT = process.env.PORT || 8000;

const app = express();

app.enable('trust proxy')
app.use(slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 3, // allow 3 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 5
}));

app.all('/*', (request, response) => {
  response.status(403).send();
});

app.listen(PORT);
console.log(`App listening on ${PORT}`);
