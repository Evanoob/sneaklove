const express = require("express");
const router = express.Router();

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

router.get("/one-product/:id", (req, res, next) => {
  sneakerModel
  .findById(req.params.id)
  .then((dbRes) => {
    res.render("one_product", {
      sneaker: dbRes
    })
  })
.catch(next)
});

module.exports = router;
