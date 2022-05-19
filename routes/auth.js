require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
let token_access;

router.get("/", (req, res) => {
  res.redirect(
    `http://www.strava.com/oauth/authorize?client_id=${process.env.STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/auth/exchange_token&approval_prompt=force&scope=activity:read_all`
  );
});

router.get("/exchange_token", ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    code,
  };
  console.log("my code", code);
  const opts = { headers: { accept: "application/json" } };
  axios
    .post("https://www.strava.com/oauth/token?", body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      console.log("my token", token);
      token_access = token;
      console.log(token_access);
    });
  res.redirect("/");
});

module.exports = router;
