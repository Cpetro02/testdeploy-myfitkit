const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//used for frontend user account authentication - user can stay logged in for 3 days
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
// login user
const loginUser = async(req, res) => {
    const{username, password} = req.body

    try{
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.status(200).json({username, user, token}) //send response of successful login
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//signup user - creates acc in MongoDB
const signupUser = async(req, res) => {
    const {email, username, password} = req.body

    try{
        const user = await User.signup(email, username, password) //call function to signup and create user account in MongoDB
        const token = createToken(user._id)
        res.status(200).json({email, user, token}) //send response of successful acc creation
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}