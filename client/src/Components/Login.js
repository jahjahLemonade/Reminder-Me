import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import firebase from './firebase.js'
import { AuthContext } from "./Auth.js"
import "../CSS/Login.css"

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const { login_email, login_password } = event.target.elements
        try {
            await firebase.auth().signInWithEmailAndPassword(login_email.value, login_password.value)
            history.push("/")
        } catch(err) {
            alert(err)
        }
    }, [history])

    const { currUser } = useContext(AuthContext)
    if(currUser) return <Redirect to="/" />

    return (
        <div className='row'>
        <form id="login" className='col s12' onSubmit={handleLogin}>
            <div className='row'>
                <div className='input-field col s6'>
                    <input id='login_email' type='email' className='validate' autoComplete="on" required/>
                    <label htmlFor="login_email">Email</label>
                </div> 
            </div>
            <div className='row'>
                <div className='input-field col s6'>
                    <input id='login_password' type='password' className='validate' autoComplete="on" required/>
                    <label htmlFor="login_password">Password</label>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                    <button style={{ backgroundColor: "#056674"}} className="waves-effect waves-light btn-large">Login</button>
                </div>
        </form>
    </div>
    )
}

export default withRouter(Login)