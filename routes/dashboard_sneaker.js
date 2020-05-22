const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const uploader = require("./../config/cloudinary");
const sneakerModel = require("./../models/Sneaker");
const protectPrivateRoute = require('./../middlewares/protectPrivateRoute');


router.get("/products", (req, res, next) => {
    sneakerModel
        .find()
        .populate("category")
        .then((dbRes) => {
            res.render("products", {
                sneakers: dbRes,
                title: "Tous les produits",
            });
        })
        .catch(next);
});

router.get("/products_manage", protectPrivateRoute, (req, res, next) => {
    sneakerModel
        .find()
        .populate("category")
        .then((dbRes) =>
            res.render("products_manage", {
                sneakers: dbRes,
                title: "Gérer les produits",
            }) 
        )
        .catch(next);
});

router.get("/products_add", protectPrivateRoute,(req,res,next) =>{
    sneakerModel
    .find()
    .then((sneakers)=>
    res.render("products_add",{
        sneakers, title: "Add sneakers"
    })
    ).catch(next);
});

router.post("/one_product", 
// uploader.single("image"), 
(req,res,next)=>{
    const newSneaker = { ...req.body };
    if(req.file) newSneaker.image = req.files.secure_url;
    // console.log(">>> fichier posté ? >>>", req.file);
//   console.log(">>> nouveau produit >>> ", newSneaker);
  sneakerModel
  .create(newSneaker)
  .then((dbRes) =>{
    // console.log("produit ajouté en bdd >>> ", dbRes);  
    res.redirect("products_manage")
  })
.catch(next);
} );


module.exports = router;