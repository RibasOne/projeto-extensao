const Admin = require('../models/adminModel.js');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username: username });

        if (admin && admin.password === password) {
            req.session.isAdmin = true;
            res.redirect('/admin');
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.error('Erro ao verificar credenciais do administrador:', err);
        res.status(500).send('Erro interno do servidor');
    }
};