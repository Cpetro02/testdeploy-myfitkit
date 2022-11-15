const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify that user is authenticated
  const { authorization } = req.headers

  //make sure not null
  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  //get token from authorization header (at index 1)
  const token = authorization.split(' ')[1]

  //verify user token
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    //make sure authroized user is in mongoDB
    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth