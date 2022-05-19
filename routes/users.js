//USERS ROUTER
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("user new form");
});

router.post("/", (req, res) => {
  res.send("make a user");
});

//same as stuff below but chained together with the route function
//route defined in one location
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`get user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with ID ${req.params.id}`);
  });

//get any route that starts with users and has code after
//:id is a dynamic parameter
//template literal
//put dynamuic routes at end of file

const users = [{ name: "Brett" }, { name: "swag" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
