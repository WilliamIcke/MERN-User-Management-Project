const mongoose = require("mongoose");

/**
 * membershipName: Type String and required, is the name of the membership
 * active: Type boolean and required, used to determine if membership is active
 * @type {mongoose.Schema}
 */
const membershipSchema = new mongoose.Schema({
    membershipName: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const Membership = mongoose.model('Membership', membershipSchema)

module.exports = {Membership};