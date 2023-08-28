const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avater: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);