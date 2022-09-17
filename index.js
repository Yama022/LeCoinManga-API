require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("Hello World");
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
