exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        req.session.isAdmin = true;
        res.redirect('/admin');
    } else {
        res.redirect('/login');
    }
};