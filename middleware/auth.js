// AUTH CONFIGURATION 

const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, JWT_SECRET_TOKEN);
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'Invalid user id !';
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ message: "Invalid authentication !" });
    }
};