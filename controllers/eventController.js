const Event = require('../models/event.js');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

exports.addEvent = async (req, res) => {
    const { eventName, eventLocation, eventDate, eventTime } = req.body;

    const newEvent = new Event({
        name: eventName,
        location: eventLocation,
        date: eventDate,
        time: eventTime
    });

    try {
        const savedEvent = await newEvent.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).send('Event deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};
