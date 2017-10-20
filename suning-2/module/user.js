var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = {
    user:String,
    pw:String
}

var user = mongoose.model('user',new Schema(user));

module.exports = user;
