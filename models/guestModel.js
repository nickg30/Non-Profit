var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    zip: String
});

var Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;