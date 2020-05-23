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
  res.render("products");
});

// router.get("/one-product/:id", (req, res) => {
//   res.render("one-product");
// });

module.exports = router;
