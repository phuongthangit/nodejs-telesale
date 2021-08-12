const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Campaign = new Schema({
    name: { type: String, max: 255 },
    start_date: { type: Date },
    end_date: { type: Date },
    id_user: { type: Number, match: '^[0-9]{10,11}$' },
    slug: { type: String },
    total_member: { type: String },
});

module.exports = mongoose.model('User',User);