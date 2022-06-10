// USER ROUTER CONFIGURATION

const express = require('express');
const router = express.Router();

const userControl = require('../controllers/user');

router.post('/login', userControl.login);

module.exports = router;