const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../models/User");

router.get("/signup", (req, res) => {
    res.render("signup")
});

router.post("/signup", (req, res, next) => {
    const user = req.body;
    if (!user.name || user.lastname || !user.password || !user.email) {
        req.flash("warning", "Merci de remplir tous les champs requis.");
        res.redirect("/signup");
    } else {
        userModel
            .findOne({
                email: user.email
            })
            .then((dbRes) => {
                if (dbRes) {
                    req.flash("warning", "Désolé, cet email n'est pas disponible.");
                    res.redirect("/signup")
                }
            })
            .catch(next);
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(user.password, salt);
        user.password = hashed;

        userModel
            .create(user)
            .then((dbRes) => {
                req.flash("success", "Inscription validée !");
                res.redirect("/signin");
            })
            .catch(next);
    }
})

module.exports = router;













module.exports = router;