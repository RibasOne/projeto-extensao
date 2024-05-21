let events = [];

exports.getAllEvents = (req, res) => {
    res.json(events);
};

exports.addEvent = (req, res) => {
    const { eventName, eventLocation, eventDate, eventTime } = req.body;

    const newEvent = {
        name: eventName,
        location: eventLocation,
        date: eventDate,
        time: eventTime
    };

    events.push(newEvent);
    res.redirect('/');
};