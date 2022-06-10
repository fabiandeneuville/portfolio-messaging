// MESSAGE ROUTER CONFIGRATION

const express = require('express');
const router = express.Router();

const messageControl = require('../controllers/message');
const auth = require('../middleware/auth');

router.post('/', messageControl.postMessage);
router.get('/', auth, messageControl.getAllMessages);
router.get('/:id', auth, messageControl.getOneMessage);
router.put('/:id', auth, messageControl.changeMessageStatus);
router.delete('/:id', auth, messageControl.deleteOneMessage);

module.exports = router;