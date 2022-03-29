
const mongoose = require("mongoose")

const messagesCollection = 'messages';

const messagesSchema = new mongoose.Schema({
    author: {
        type: Object, 
        require: true, 
    },
    text: {
        type: Object, 
        require: true, 
    },
})

const messages = mongoose.model(messagesCollection, messagesSchema);

module.exports =  messages
