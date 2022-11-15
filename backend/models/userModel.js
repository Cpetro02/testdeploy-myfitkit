//a model of a user that uses our app
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const validator = require('validator')

const connection = mongoose.createConnection("mongodb+srv://admin:admin@fitkittens.znqjo0j.mongodb.net/dev_test_user");

userSchema = new Schema( {
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

	// make sure email & password are valid
	if(!email || !username || !password){
		throw Error('Empty values are not valid')
	}
	if (!validator.isEmail(email)){
		throw Error('Not a valid email address')
	}

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

//create static method for user login
userSchema.statics.login = async function(email, username, password){

	if(!email ||!username || !password){ // make sure email & password exists in database
		throw Error('Empty values are not valid')
	}

	const user = await this.findOne({ email }) //check if email already exists (if it does, then says account already exists)
	if(!user){
		throw Error('No account exists with those credentials.')
	}

	//match passwords
	const match = await bcrypt.compare(password, user.password) //check both password AND hashed password
	if(!match){
		throw Error('Incorrect password')
	}
	
	return user
}

User = connection.model('User', userSchema);
module.exports = User;