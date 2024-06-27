"use strict";

var express = require('express');
var session = require('express-session');
var connectDB = require('./config/database');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
connectDB();

// Importing routes
var indexRoutes = require('./routes/indexRoutes');
var adminRoutes = require('./routes/adminRoutes');
var loginRoutes = require('./routes/loginRoutes');
var eventRoutes = require('./routes/eventsRoutes');
var emailRoutes = require('./routes/emailRoutes');
app.use(session({
  secret: 'secret-safe',
  resave: false,
  saveUninitialized: true
}));

// Middleware for static files
app.use(express["static"](path.join(__dirname, 'public')));
// Middleware for parsing do body
app.use(bodyParser.urlencoded({
  extended: true
}));
// Middleware for parsing de JSON
app.use(bodyParser.json());

// Usando rotas
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/events', eventRoutes);
app.use('/', emailRoutes);

// Initializing the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor est\xE1 rodando na porta ".concat(PORT));
});