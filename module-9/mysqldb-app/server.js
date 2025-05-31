const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes');
let postsRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');
// parse requests of content-type -application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postsRoutes);
app.use('./api/posts', commentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});