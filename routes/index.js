const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag")

console.log(`
-----------------------------
-----------------------------
node says : wax on / wax off !
-----------------------------
-----------------------------`);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/collection", (req, res, next) => {
  Promise.all([sneakerModel.find(), tagModel.find()])
    .then((dbRes) => {
      res.render("products", {
        sneakers: dbRes[0],
        tags: dbRes[1]
      });
    })
    .catch(next)
});

router.get("/sneakers/men", (req, res, next) => {
  Promise.all([sneakerModel.find({
      "category": "men"
    }), tagModel.find()])
    .then((dbRes) => {
      res.render("products", {
        sneakers: dbRes[0],
        tags: dbRes[1]
      });
    })
    .catch(next)
});

router.get("/sneakers/women", (req, res, next) => {
  Promise.all([sneakerModel.find({
      "category": "women"
    }), tagModel.find()])
    .then((dbRes) => {
      res.render("products", {
        sneakers: dbRes[0],
        tags: dbRes[1]
      });
    })
    .catch(next)
});

router.get("/sneakers/kids", (req, res, next) => {
  Promise.all([sneakerModel.find({
      "category": "kids"
    }), tagModel.find()])
    .then((dbRes) => {
      res.render("products", {
        sneakers: dbRes[0],
        tags: dbRes[1]
      });
    })
    .catch(next)
});


module.exports = router;