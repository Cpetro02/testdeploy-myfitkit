const User = require('../models/userModel')
// login user
const loginUser = async(req, res) => {
    res.json({mssg: 'login user page'})
}

//signup user
const signupUser = async(req, res) => {
    res.json({mssg: 'sign up user page'})
}

module.exports = {loginUser, signupUser}