"use strict";

var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "transportnodemailer@gmail.com",
    pass: "aanmywyawolhitho"
  },
  tls: {
    rejectUnauthorized: false
  }
});
module.exports = transport;