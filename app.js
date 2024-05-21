const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// importing routes
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');
const eventRoutes = require('./routes/events');

app.use(session({
    secret: 'secret-safe',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// using routes
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/eventos', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});