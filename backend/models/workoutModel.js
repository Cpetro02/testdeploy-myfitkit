//will definte how our workout documents will look like & be structured
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Defines structure of workout data document

const workoutSchema = new Schema({
    //edit these to match our exercise db
    name: {
        type: String,
        required: true

    },
    body_part: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
}, {collection: 'exercise_database'})

module.exports = mongoose.model('Workout', workoutSchema) //creates a model for workout data
