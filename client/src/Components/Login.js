import React, { useState, useCallback, useContext } from 'react'
import { Navigate} from 'react-router'
import {auth, signInWithEmailAndPassword} from './firebase.js'
import { AuthContext } from "./Auth.js"
import { Footer } from './Footer.js'
import email from "../assets/email1.svg"
import pw from "../assets/Vector.svg"
import login from "../assets/Login.png"
import eye from "../assets/eye-slash.svg"


const Login = () => {
    const [type, setType] = useState("password")
    // const history =  useHistory()
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const userEmail = event.target.elements[0].value
        const password = event.target.elements[1].value
        try {
            await signInWithEmailAndPassword(auth, userEmail, password)
            // history.push("/")
        } catch (err) {
            alert(err)
        }
    }, [])

    const handlePw = () => {
        setType(t => t === "password" ? "text" : "password")
    }

    const { currUser } = useContext(AuthContext)
    if (currUser) return <Navigate to="/" />

    return (
        <div>
            <div className="px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
                <form className="flex flex-col lg:flex-row  justify-center lg:justify-around bg-[#fff] mt-8 md:mt-20 lg:pt-24 lg:pb-16 rounded-xl" onSubmit={handleLogin}>
                    <div className="flex justify-center | lg:py-16"><img className="w-full sm:max-w-[45rem]" src={login} /></div>
                    <div className="w-full px-[0.6rem] | lg:max-w-[32rem] lg:flex lg:flex-col lg:justify-center">
                        <div>
                            <p className="text-[1.25rem] font-semibold mb-[2.62rem] | md:text-[1.75rem] | lg:text-[2rem]">Login to your account</p>
                            <div>
                            <label htmlFor="login_email">Email</label>
                                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-[2.2rem] pr-[0.7rem]" src={email} />
                                    <input type='email' autoComplete="on" placeholder={`Enter email`} required />
                                </div>
                            </div>
                            <div className="mt-8 mb-[1.25rem]">
                            <label htmlFor="login_password">Password</label>
                                <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                    <img className="w-8 pr-[0.7rem]" src={pw} />
                                    <input type={type} autoComplete="on" placeholder={`**********`} required />
                                    <img onClick={handlePw} className="w-8 pl-[0.7rem]" src={eye} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-[11rem] h-[4rem] text-lg font-semibold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 mx-auto mb-8 border border-[#fff] rounded-xl">
                            <button>Login</button>
                        </div>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login