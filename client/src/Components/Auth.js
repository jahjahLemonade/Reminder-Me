import React, {createContext, useEffect, useState} from 'react'
import {auth, onAuthStateChanged} from './firebase.js'

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null)
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user)
            setPending(false)
          })
          return () => unsubscribe()
    }, [])
    if(pending) {
      return (
        <div className="preloader-wrapper active | flex mx-auto mt-[15%]">
          <div className="spinner-layer spinner-green-only">
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


