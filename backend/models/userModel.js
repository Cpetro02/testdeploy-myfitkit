//a model of a user that uses our app
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const connection = mongoose.createConnection("mongodb+srv://admin:admin@fitkittens.znqjo0j.mongodb.net/dev_test_user");

userSchema = new Schema( {
	unique_id: Number,

	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
}, {collection: 'users'})

//create static method to sign a user up
userSchema.statics.signup = async function(email, username, password) {

	//check if email already exists (if it does, then says account already exists)
	const exists = await this.findOne({ email })
	if(exists){
		throw Error('Email/Account already exists.')
	}

	//else, hash the password using bcrypt & create an account
	const salt = await bcrypt.genSalt(10) //creates random string to add on to password
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({ email, username, password:hash }) // create + send the user account with hashed password to MongoDB

	return user
}

User = connection.model('User', userSchema);
module.exports = User;