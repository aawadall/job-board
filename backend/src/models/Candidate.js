const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { 
        first: { type: String, required: true },
        middle: { type: String, required: false },
        last: { type: String, required: true }
     },
    contacts: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    location: String,
    skills: [String],
    experience: String,
    education: String,
    notes: String,
});

module.exports = mongoose.model('Candidate', CandidateSchema);