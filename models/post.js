const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        min: 0,
        default: 0
    },
    dislikes: {
        type: Number,
        min: 0,
        default: 0
    },
    // comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema)