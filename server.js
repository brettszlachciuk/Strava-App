const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");

//all files in public folder used static
app.use(express.static("public"));

//request happens when someone navigates to the page
app.get("/", logger, (req, res) => {
  console.log("here");
  //res.json({ message: "Error" });
  //render an html file
  res.render("index", { text: "App" });
});

//middleware: runs between request and response and does something

//link routers
const userRouter = require("./routes/users");
app.use("/users", userRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

//logging out function
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
