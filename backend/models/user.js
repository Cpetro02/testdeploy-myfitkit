//a model of a user that uses our app
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const connection = mongoose.createConnection("mongodb+srv://admin:admin@fitkittens.znqjo0j.mongodb.net/dev_test_user");

userSchema = new Schema( {
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
User = connection.model('User', userSchema);
module.exports = User;