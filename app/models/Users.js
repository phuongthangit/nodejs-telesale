const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    first_name: { type: String, max: 255 },
    last_name: { type: String, max: 255 },
    email: { type: String, max: 255 },
    phone: { type: Number, match: '^[0-9]{10,11}$' },
    gender: { type: String },
    birthday: { type: Date },
    province: { type: String },
    district: { type: String },
    commune: { type: String },
    address: { type: String },
    image: { type: String },
});

module.exports = mongoose.model('User',User);