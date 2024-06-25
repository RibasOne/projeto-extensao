const transport = require('../config/nodemailer');

exports.sendEmail = (req, res) => {
    const { nome, subject, mensagem } = req.body;

    const mailOptions = {
        from: 'Contato WebSite: <transportnodemailer@gmail.com>',
        to: 'flaviomagicodebc@gmail.com',
        subject: `Nova Mensagem de ${nome}`,
        html: `<h1>Nova mensagem de ${nome}</h1><p>Email: ${subject}</p><p>Mensagem: ${mensagem}</p>`,
        text: `Nova mensagem de ${nome}\nEmail: ${subject}\nMensagem: ${mensagem}`,
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar o e-mail:', error);
            res.status(500).send('Erro ao enviar o e-mail.');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.redirect('/');
        }
    });
};
