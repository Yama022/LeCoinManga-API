require('dotenv').config();
const express = require('express');
const cors = require('cors');
const globalRouter = require('./app/routers');
const errorRouter = require('./app/routers/error');
const {
  log: {
    info,
    error
  },
} = require('./app/utils');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// Cors Configuration
app.use(cors({
  origin: '*',
}));


// Redirect to BASE_URL
app.get("/", (_, res) => {
  res.redirect("/api/v1");
})

app.use('/api/v1', globalRouter);
app.use(errorRouter);

// Launch the server
try {
  app.listen(PORT, () => {
    if (process.env.LOGGING === 'true') {
      info(`LeCoinmanga API listening on http://localhost:${PORT}`);
    }
  });
} catch (err) {
  error(`LeCoinmanga API failed to start: ${err}`);
}