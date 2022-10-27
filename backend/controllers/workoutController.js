//db functions to reference in our /router/workout.js file
// the functions actually interacting with Mongoose and MongoDB
const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')


//GET all workouts
const getWorkouts = async(req, res) => {
    
    const workouts = await Workout.find({}) //gets all documents

    res.status(200).json(workouts) //sends json response to user of all workouts from mongo
}


//GET a single workout
const getWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){ //checks if valid workout id
        return res.status(404).json({error: 'No such workout.'})
    }

    const workout = await Workout.findById(id)

    if(!workout) { //if workout id not found
        return res.status(404).json({error: 'No such workout.'})
    }

    res.status(200).json(workout) //sends json response of workout
}

module.exports = {
    getWorkouts,
    getWorkout
}