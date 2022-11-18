import { Link } from 'react-router-dom'
import { useWorkoutHistory } from '../hooks/useWorkoutHistory'
import { useVisualizeHistory } from '../hooks/useVisualizeHistory'
import { useSurvey } from '../hooks/useSurvey'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {

    const {workoutHistory} = useWorkoutHistory()
    const {visualize} = useVisualizeHistory()
    const {survey} = useSurvey()
    const {logout} = useLogout()
    const {user} = useAuthContext()
    
    const handleWorkoutHistoryClick = () => {
        workoutHistory()
    }
    const handleVisualizeClick = () => {
        visualize()
    }
    const handleSurveyClick = () => {
        survey()
    }
    const handleLogOutClick = () => {
        logout()
    }

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Fit Kittens</h1>
                </Link>
                <nav>
                    {user && (
                            <div>
                                <div style={{paddingRight: '15px'}}>
                                    <button onClick={handleWorkoutHistoryClick}>Workout History</button>
                                </div>
                            </div>
                        )}
                    {user && (
                            <div>
                                <div style={{paddingRight: '15px'}}>
                                    <button onClick={handleVisualizeClick}>Visualize</button>
                                </div>
                            </div>
                        )}
                     {user && (
                            <div>
                                <div style={{paddingRight: '60px'}}>
                                    <button onClick={handleSurveyClick}>Survey</button>
                                </div>
                            </div>
                        )}    
                    {user && (
                        <div>
                            <span>{user.user.username}&nbsp;&nbsp;&nbsp;</span>
                            <button onClick={handleLogOutClick}>Log Out</button>
                        </div>
                    )}

                    {!user && (
                        <div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar