const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        await newUser.save()
        res.json({
            message: "Account has been created successfully"
        })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const Signin = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        };

        const isPwdCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPwdCorrect) {
            return res.status(400).json({
                message: "Incorrect password"
            });
        };

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '5 minutes'
        });
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            avatar: user.avatarImg,
            token
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { Signup, Signin };