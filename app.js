const express = require('express');
const session = require('express-session');
const connectDB = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
connectDB();

// Importing routes
const indexRoutes = require('./routes/indexRoutes');
const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRoutes');
const eventRoutes = require('./routes/eventsRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use(session({
    secret: 'secret-safe',
    resave: false,
    saveUninitialized: true
}));

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
// Middleware for parsing do body
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware for parsing de JSON
app.use(bodyParser.json());

// Usando rotas
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/events', eventRoutes);
app.use('/', emailRoutes);

// Initializing the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
