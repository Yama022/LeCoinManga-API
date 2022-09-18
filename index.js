require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {
  log: {
    info,
    error
  },
} = require('./app/utils');

const PORT = process.env.PORT || 5000;
const app = express();

// Cors Configuration
app.use(cors({
  origin: '*',
}));


// Redirect to BASE_URL
app.get("/", (_, res) => {
  res.redirect("/api/v1");
})

// TODO: Load Routes
// app.use('/api/v1', routes);
// app.use(errorRouter);

// Launch the server
try {
  app.listen(PORT, () => {
    if (process.env.NO_LOGGING !== 'true') {
      info(`LeCoinmanga API listening on http://localhost:${PORT}`);
    }
  });
} catch (err) {
  error(`LeCoinmanga API failed to start: ${err}`);
}