const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');




// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());


//ROUTES MIDDLEWARE
// app.get('/', (req, res) => {
//     res.send("Hello from Node Js");
// })
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});