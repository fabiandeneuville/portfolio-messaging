// MESSAGE MODEL CONFIGURATION

const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number},
    subject: {type: String},
    content: {type: String, required: true},
    processed: {type: Boolean, required: true, default: false}   
})

module.exports = mongoose.model('Message', messageSchema);