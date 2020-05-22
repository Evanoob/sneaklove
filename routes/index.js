const express = require("express");
const router = express.Router();
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");

console.log(`
-----------------------------
-----------------------------
node says : wax on / wax off !
-----------------------------
-----------------------------`
);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  res.send("products");
});

router.get("/one-product/:id", (req, res) => {
  res.send("one-product");
});

router.get("/signup", (req, res) => {
  res.send("signup");
});

router.get("/signin", (req, res) => {
  res.send("signin");
});


module.exports = router;
