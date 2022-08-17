const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan("tiny"));

connectDB();

app.use(bodyparser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'asset')))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname,"asset/css")))
app.use('/css', express.static(path.resolve(__dirname,"asset/js")))
app.use('/css', express.static(path.resolve(__dirname,"asset/img")))

app.use('/',require('./server/routes/router'))
