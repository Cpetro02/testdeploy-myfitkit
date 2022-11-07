//a model of a user that uses our app
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const connection = mongoose.createConnection("mongodb+srv://admin:admin@fitkittens.znqjo0j.mongodb.net/user_data?retryWrites=true&w=majority");

userSchema = new Schema( {
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
User = mongoose.model('User', userSchema);
module.exports = User;