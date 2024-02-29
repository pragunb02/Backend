// console.log("Testing");
require("dotenv").config();
// console.log(process.env)
const express = require("express");
// import expres from "expres"
const app = express();
// all functionality of express in app
const port = 4000;

const githubData = {
  login: "pragunb02",
  id: 110607457,
  node_id: "U_kgDOBpe8YQ",
  avatar_url: "https://avatars.githubusercontent.com/u/110607457?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/pragunb02",
  html_url: "https://github.com/pragunb02",
  followers_url: "https://api.github.com/users/pragunb02/followers",
  following_url:
    "https://api.github.com/users/pragunb02/following{/other_user}",
  gists_url: "https://api.github.com/users/pragunb02/gists{/gist_id}",
  starred_url: "https://api.github.com/users/pragunb02/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/pragunb02/subscriptions",
  organizations_url: "https://api.github.com/users/pragunb02/orgs",
  repos_url: "https://api.github.com/users/pragunb02/repos",
  events_url: "https://api.github.com/users/pragunb02/events{/privacy}",
  received_events_url: "https://api.github.com/users/pragunb02/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 4,
  created_at: "2022-08-04T11:43:27Z",
  updated_at: "2023-11-03T06:25:07Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// home route
// http://localhost:4000/

app.get("/twitter", (req, res) => {
  res.send("Hi Twitter!!");
});
// http://localhost:4000/twitter

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});
// http://localhost:4000/login

app.get("/github", (req, res) => {
  res.json(githubData); // object ya object ka variable
});
// https://api.github.com/users/pragunb02

app.get("/youtube", (req, res) => {
  res.send("<h2>YT Music</h2>");
});
// http://localhost:4000/youtube

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
