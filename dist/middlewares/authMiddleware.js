"use strict";

module.exports = function (req, res, next) {
  if (req.session.isAdmin) {
    return next();
  } else {
    res.redirect('/login');
  }
};