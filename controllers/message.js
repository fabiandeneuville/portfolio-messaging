// MESSAGE CONTROLLER CONFIGURATION

const Message = require('../models/message');

// POST MESSAGE
exports.postMessage = (req, res, next) => {
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
    let date = new Date;
    const message = new Message({
        date: date.toLocaleDateString("fr-FR", options),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        content: req.body.content,
    })
    message.save()
    .then(() => res.status(201).json({message: "Message posted !"}))
    .catch(error => res.status(400).json({error}));
};

// GET ALL MESSAGES
exports.getAllMessages = (req, res, next) => {
    Message.find()
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(400).json({error}));
};

// GET ONE MESSAGE
exports.getOneMessage = (req, res, next) => {
    Message.findOne({_id: req.params.id})
    .then(message => res.status(200).json(message))
    .catch(error => res.status(404).json({error}));
};

// CHANGE MESSAGE STATUS
exports.changeMessageStatus = (req, res, next) => {
    Message.findOne({ _id: req.params.id})
    .then(message => {
        if(message.processed === false){
            Message.updateOne({ _id: req.params.id}, {processed: true})
            .then(() => res.status(201).json({message: "message processed"}))
            .catch(error => res.status(401).json({error}))
        } else {
            Message.updateOne({ _id: req.params.id}, {processed: false})
            .then(() => res.status(201).json({message: "message not processed"}))
            .catch(error => res.status(401).json({error}))
        }
    })
    .catch(error => res.status(404).json({error}))
};

// DELETE ONE MESSAGE
exports.deleteOneMessage = (req, res, next) => {
    Message.findOne({ _id: req.params.id})
    .then(message => {
        if(!message){
            return res.status(404).json({message: "Message not found !"})
        }
        Message.deleteOne({ _id: req.params.id})
        .then(() => res.status(200).json({message: "Message deleted"}))
        .catch(error => res.status(400).json({error}))
    })
    .catch(error => res.status(400).json({error}));
};