const mongoose = require( "mongoose");

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    postText: {
        type: String,
        required: true,
    },
    postImage: {
        type: String,
        default: "",
    },
    postComment: {
        type: [String],
        default: [],
    },
    postLike: {
        type: [String],
        default: [],
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema); 