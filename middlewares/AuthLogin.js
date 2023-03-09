const jwt = require("jsonwebtoken");
require('dotenv').config();

const JWT_SECRET_KEY = "SECRET_KEY_JWT";

const AuthToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];

        const [tokenType, tokenValue] = authHeader.split(' ');

        if (tokenType !== 'Bearer') {
            return res.status(403).send({
                message: 'An error occurred in the forwarded Authorization'
            });
        };

        if (tokenValue == null) {
            return res.status(401).send({
                message: 'An error occurred in the forwarded Authorization'
            });
        };

        jwt.verify(tokenValue, JWT_SECRET_KEY, (error, decoded) => {
            if (error) return res.sendStatus(403);

            userData = {
                //
            };

            next();
        })
    } catch (error) {
        return res.status(403).send({
            message: 'This feature requires login'
        });
    }
}

module.exports = { AuthToken };