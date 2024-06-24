const express = require('express');
const session = require('express-session');
const connectDB = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
connectDB();

// Importing routes
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');
const eventRoutes = require('./routes/events');

app.use(session({
    secret: 'secret-safe',
    resave: false,
    saveUninitialized: true
}));

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
// Middleware for parsing body
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware for parsing JSON
app.use(bodyParser.json());

// Using routes
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/events', eventRoutes);

// Init server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});