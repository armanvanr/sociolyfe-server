const mongoose = require( "mongoose");

const LikeSchema = new mongoose.Schema({
    like: {
        userId:{
            type: String,
            required: true,
        },
        postId:{
            type: String,
            required: true,
        },
        type: Boolean,
        default: false,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema); 