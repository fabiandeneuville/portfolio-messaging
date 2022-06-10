// USER CONTROLLER CONFIGURATION

const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

exports.login = (req, res, next) => {
     User.findOne({ email: req.body.email})
     .then(user => {
         if(!user){
             return res.status(404).json({message: "User not found !"})
         } else {
             if(user.password === req.body.password){
                 return res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        {userId: user._id},
                        JWT_SECRET_TOKEN,
                        {expiresIn: '24h'}
                    )
                })
             } else {
                 return res.status(401).json({message: "Password error !"});
             }
         }
     })
     .catch(error => res.status(500).json({error}))
};