const express = require("express");

const router = express.Router();

const user = require('./users');
const post = require('./posts');
const comment = require('./comments');
const like = require('./likes');

router.use(user, post, comment, like);

module.exports = router;