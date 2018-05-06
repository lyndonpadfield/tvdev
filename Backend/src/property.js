const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    address: String,
    city: String,
    state: String,
    zipcode: String
});

const Property = mongoose.model('property', PropertySchema);

module.exports = Property;


