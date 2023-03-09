const express = require( "express");
const { Signup, Signin } = require("../controllers/auth");
const router = express.Router();

//Routes
router.post('/signup', Signup);

router.post('/signin', Signin);

module.exports = router;