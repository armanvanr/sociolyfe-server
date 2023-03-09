const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
// const userRoutes = require('./routes/users.js');
// const postRoutes = require('./routes/posts.js');
// const commentRoutes = require('./routes/comments.js');
// const likeRoutes = require('./routes/likes.js');
// const authRoutes = require('./routes/auth.js');
const router = require('./routes/index');
const app = express();
const public = __dirname + "/public/";

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB!")
        })
        .catch(err => {
            throw err;
        });
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(public + "index.html"));
})

app.listen(8080, () => {
    connect();
    console.log("Server 8080 Connected!");
});

