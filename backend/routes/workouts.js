const express = require('express') //for using express router
const {
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth) //fires middleware to ensure user is logged in to see workouts

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

module.exports = router //export the router





//POST create a new workout
/*
router.post('/', (req, res) => {
    res.json({mssg: 'POST a workout'})
})*/

//delete a workout
/*
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})*/

//UPDATE a workout
/*
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})*/