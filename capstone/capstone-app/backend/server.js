const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const chartRoutes = require('./routes/chartRoutes');

const app = express();

require("dotenv").config();
// parse requests of content-type - application/json

// Enable cors
app.use(cors());


app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/charts', chartRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});