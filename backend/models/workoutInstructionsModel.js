//will definte how our workout documents will look like & be structured
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const connection = mongoose.createConnection("mongodb+srv://admin:admin@fitkittens.znqjo0j.mongodb.net/exercise_data?retryWrites=true&w=majority");

//Defines structure of workout data document
const workoutInstructionsSchema = new Schema({
    //edit these to match our exercise db
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    }
}, {collection: 'exercise_database_instructions'})

module.exports = connection.model('WorkoutInstructions', workoutInstructionsSchema) //creates a model for workout data
