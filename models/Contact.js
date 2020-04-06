const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    type: {
        type: String,
        default: 'personal'
    }, 
    date: {
        type: Date,
        default: Date.now
       
    },
});

module.exports = mongoose.model('contact', ContactSchema);