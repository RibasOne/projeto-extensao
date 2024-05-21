const express = require('express');
const session = require('express-session');
const path = require('path');
const body_parser = require('body-parser');
const app = express();

app.use(session({
    secret: 'secret-safe',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.urlencoded({ extended: true }));

let events = [];

// Middleware
function authMiddleware(req, res, next){
    if(req.session.isAdmin){
        return next();
    }else{
        res.redirect('/login');
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', express.urlencoded({extended: true}), (req, res) => {
    const {username, password} = req.body;
    if(username === 'admin' && password === 'admin'){
        req.session.isAdmin = true;
        res.redirect('/admin');
    }else{
        res.redirect('/login');
    }
});

app.post('/adicionar-evento', (req, res) => {
    const { eventName, eventLocation, eventDate, eventTime } = req.body;

    const newEvent = {
        name: eventName,
        location: eventLocation,
        date: eventDate,
        time: eventTime
    };

    events.push(newEvent);
    res.redirect('/');
});

app.get('/eventos', (req, res) => {
    res.json(events);
});

app.get('/admin', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});