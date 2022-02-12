const mongoose = require("mongoose");

/**
 * firstname: Type String and required, is the firstname of the user
 * surname: Type String and required, is the surname of the user
 * dateOfBirth: Type Date and required, is the date of birth of the user
 * membership: Type Integer and is not required, is membership the user is currently subscribed to
 * membershipStart: Type Date and is not required, shows the start date of the subscription if applicable
 * active: Type boolean and required, used to determine if user is active
 * @type {mongoose.Schema}
 */
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    membership: {
        type: Integer,
        required: false
    },
    membershipStart: {
        type: Date,
        required: false
    },
    active: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);