const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    location: String,
    date: {
        type: Date,
        get: (date) => {
            return date.toISOString().split('T')[0]; // Formata a data como 'aaaa-mm-dd'
        }
    },
    time: String
}, { toJSON: { getters: true }, toObject: { getters: true } });

module.exports = mongoose.model('Event', eventSchema);