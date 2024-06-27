"use strict";

var transport = require('../config/nodemailer');
exports.sendEmail = function (req, res) {
  var _req$body = req.body,
    nome = _req$body.nome,
    subject = _req$body.subject,
    mensagem = _req$body.mensagem;
  var mailOptions = {
    from: 'Contato WebSite: <transportnodemailer@gmail.com>',
    to: 'flaviomagicodebc@gmail.com',
    subject: "Nova Mensagem de ".concat(nome),
    html: "<h1>Nova mensagem de ".concat(nome, "</h1><p>Email: ").concat(subject, "</p><p>Mensagem: ").concat(mensagem, "</p>"),
    text: "Nova mensagem de ".concat(nome, "\nEmail: ").concat(subject, "\nMensagem: ").concat(mensagem)
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail.');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.redirect('/');
    }
  });
};