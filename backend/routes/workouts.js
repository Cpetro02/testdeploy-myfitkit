const express = require('express') //for using express router
const router = express.Router()
const {
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST create a new workout
//do we need this?
router.post('/', (req, res) => {
    res.json({mssg: 'POST a workout'})
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router //export the router