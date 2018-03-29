const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



app.get('/signUp', route.getSignUp)

app.get('/logIn', route.getLogIn)

app.get('/signUp', route.getSignUp)

app.get('/vetProfile', route.getVetProfile)

app.get('/petProfile', route.getPetProfile)

module.exports = app;
