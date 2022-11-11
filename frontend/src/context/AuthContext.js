//used for maintaining a user state when logged in
import {createContext,useReducer} from 'react'
export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload } //keeps user logged in
        case 'LOGOUT':
            return {user: null} //logs user out
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log('AuthContext state: ', state)

    return (
        //this template lets user stay logged in even when page is reloaded
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}