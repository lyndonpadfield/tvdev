const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const PropertySchema = new Schema({
    address: String
});

const Property = mongoose.model('property', PropertySchema);

module.exports = Property;


