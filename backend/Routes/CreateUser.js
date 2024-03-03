const express = require("express")
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtSecret = "MyNameIsDevilThalaFan@07"


router.post("/createuser", [
    body('email', 'incorrect email').isEmail(),
    body('name', 'maximum length of name should be 10').isLength({ max: 10 }),
    body('password', 'minimum length of password should be 8').isLength({ min: 8 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location
            })
            res.json({ success: true });

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }

    });


router.post("/loginuser", [
    body('email', 'incorrect email').isEmail(),
    body('password', 'minimum length of password should be 8').isLength({ min: 8 })]
    , async (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const email = req.body.email;
            const pass = req.body.password;

            try {

            const userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({ errors: "Check your email properly. " });
            }

            console.log("Hashed Password from Database:", userData.password);
            console.log("Hashed Password from Login Request:", pass);

            const pwdCompare = await bcrypt.compare(pass, userData.password);
            if (!pwdCompare) {
                console.log("Password comparison failed.");
                return res.status(400).json({ errors: "Password is not correct." });
            }

            const tokenPayload = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(tokenPayload, jwtSecret)
            return res.json({ success: true, authToken });

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }

    });

module.exports = router;