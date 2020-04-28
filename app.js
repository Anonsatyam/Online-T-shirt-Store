const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const authRoutes = require("./routes/auth");
const app = express();

mongoose.connect('mongodb://localhost:27017/tshirt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB IS CONNECTED");
});

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

//Routes
app.use("/api", authRoutes)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});