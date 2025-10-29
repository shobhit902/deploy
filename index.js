const express = require("express");
const format = require("date-format");

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "shobhit rawat",
    followers: 555,
    follows: 5,
    date: format.asString("dd mm yy hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});
app.get("/", (req, res) => {
  res.send("Welcome to Social Media API");
});
app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "shobhit rawat linkedin final boss",
    followers: 555,
    follows: 5,
    date: format.asString("hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});
app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "shobhit rawat og",
    followers: 555,
    follows: 5,
    date: format.asString("hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/:params", (req, res) => {
  const params = req.params.params;
  res.status(200).json({ params: params });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
