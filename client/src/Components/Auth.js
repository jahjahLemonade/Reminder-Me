import React, {useEffect, useState} from 'react'
import firebase from './firebase.js'

export const AuthContext = React.createContext()
export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null)
    const [pending, setPending] = useState(true)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrUser(user)
            setPending(false)
        })

    }, [])

    if(pending) return <div>Loading...</div>

    return (
        <AuthContext.Provider value={{currUser}}>
            {children}
        </AuthContext.Provider>
    )
}


