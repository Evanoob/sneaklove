const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const uploader = require("./../config/cloudinary");
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag")
const protectPrivateRoute = require('./../middlewares/protectPrivateRoute');


router.get("/products", (req, res, next) => {
    sneakerModel
        .find()
        .then((dbRes) => {
            res.render("products", {
                sneakers: dbRes,
                title: "Tous les produits",
            });
        })
        .catch(next);
});

router.get("/one_product/:id", (req, res, next) => {
    sneakerModel
        .findById(req.params.id)
        .then((dbRes) => {
            res.render("one_product", {
                sneaker:dbRes
            })
        }).catch(next);
});

router.get("/products_manage", protectPrivateRoute, (req, res, next) => {
    sneakerModel
        .find()
        .then((dbRes) =>
            res.render("products_manage", {
                sneakers: dbRes,
                title: "Gérer les produits",
            })
        )
        .catch(next);
});

router.get("/products_add", protectPrivateRoute, (req, res, next) => {
    sneakerModel
        .find()
        .then((sneakers) =>
            res.render("products_add", {
                sneakers,
                title: "Add sneakers"
            })
        ).catch(next);
});
router.get("/product_edit/:id", protectPrivateRoute, (req, res, next) => {

    sneakerModel
        .findById(req.params.id)
        .then((dbRes) => {
            res.render("product_edit", {
                sneaker: dbRes,
                title: "Edit"
            });
        })
        .catch(next);
})

router.get("/tag_add", protectPrivateRoute, (req, res, nex) => {
    tagModel
    .find()
    .then((dbRes) => {
        res.render("products")
    })
})

router.post("/products_add", uploader.single("image"), protectPrivateRoute, (req, res, next) => {
    const sneaker = {
        ...req.body
    };
    if (req.file) {
        sneaker.image = req.file.secure_url;
    }
    sneakerModel
        .create(sneaker)
        .then((dbRes) => {
            res.redirect("/products_manage")
        })
        .catch(next);
})

router.post("/tag_add", protectPrivateRoute, (req, res, next) => {
    tagModel
    .create(req.body)
    .then((dbRes) => {
        res.redirect("/products_add")
    })
    .catch(next)
})

router.post("/product_edit/:id", (req, res, next) => {
    sneakerModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.redirect("/products_manage"))
        .catch(next);
});

router.post("/product_delete/:id", (req, res, next) => {
    sneakerModel
        .findByIdAndDelete(req.params.id)
        .then((dbRes) => res.redirect("/products_manage"))
        .catch(next);
});


module.exports = router;