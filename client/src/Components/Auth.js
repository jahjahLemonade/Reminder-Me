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
    if (pending) {
      return (
        <div id="centerScreen" className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
        <AuthContext.Provider value={{currUser}}>
            {children}
        </AuthContext.Provider>
    )
}


