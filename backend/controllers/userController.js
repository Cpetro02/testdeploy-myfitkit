const User = require('../models/userModel')
// login user
const loginUser = async(req, res) => {
    res.json({mssg: 'login user page'})
}

//signup user - creates acc in MongoDB
const signupUser = async(req, res) => {
    const {email, username, password} = req.body

    try{
        const user = await User.signup(email, username, password) //call function to signup and create user account in MongoDB
        res.status(200).json({email, user}) //send response of successful acc creation
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}