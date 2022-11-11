//Template for displaying workout data

const WorkoutDetails = ({ workout }) => {
    return(
        <div className='workout-details'>
            <h4>{workout.name}</h4>
            <p><strong>Body Part: </strong>{workout.body_part}</p>
            <p><strong>Equipment: </strong>{workout.equipment}</p>
            <p><strong>Difficulty: </strong>{workout.difficulty}</p>
        </div>
    )
}

export default WorkoutDetails