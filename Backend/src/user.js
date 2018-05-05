const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;


