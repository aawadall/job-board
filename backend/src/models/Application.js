const mongoose = require('mongoose');

const JbApplicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    resume: { type: String, required: false },
    date: { type: Date, default: Date.now },
    decision: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
});

module.exports = mongoose.model('JbApplication', JbApplicationSchema);