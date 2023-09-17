import React, { useState, useCallback, useContext } from 'react'
import { Redirect } from 'react-router'
import firebase from './firebase.js'
import { AuthContext } from "./Auth.js"
import { Footer } from './Footer.js'
import email from "../assets/email1.svg"
import pw from "../assets/Vector.svg"
import signup from "../assets/signup.png"
import eye from "../assets/eye-slash.svg"
import name from "../assets/name.svg"


const SignUpForm = ({ history }) => {
  const [type, setType] = useState("password")
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { signup_email, signup_password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(signup_email.value, signup_password.value);
        history.push("/")
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  const handlePw = () => {
    setType(t => t === "password" ? "text" : "password")
  }

  return (
    <div>
        <div className="px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
            <form className="flex flex-col lg:flex-row  justify-center lg:justify-around bg-[#fff] mt-8 md:mt-20 lg:pt-24 lg:pb-16 rounded-xl" onSubmit={handleSignUp}>
                <div className="flex justify-center | lg:py-16"><img className="w-full sm:max-w-[45rem]" src={signup} /></div>
                <div className="w-full lg:max-w-[32rem] px-[0.6rem] lg:flex lg:flex-col lg:justify-center">
                    <div>
                        <p className="text-[1.25rem] font-semibold md:text-[1.75rem] lg:text-[2rem] mb-[2.62rem]">Create your account</p>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="first_name">First Name</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={name} />
                                <input type="text" autoComplete="on" placeholder={`Enter first name`} required />
                            </div>
                        </div>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="last_name">Last Name</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={name} />
                                <input type="text" autoComplete="on" placeholder={`Enter last name`} required />
                            </div>
                        </div>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="signup_email">Email</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                            <img className="w-[2.2rem] pr-[0.7rem]" src={email} />
                                <input type='email' autoComplete="on" placeholder={`Enter email`} required />
                            </div>
                        </div>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="signup_password">Password</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={pw} />
                                <input type={type} autoComplete="on" placeholder={`**********`} required />
                                <img onClick={handlePw} className="w-8 pl-[0.7rem]" src={eye} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-[11rem] h-[4rem] text-lg font-semibold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 mx-auto mb-8 border border-[#fff] rounded-xl">
                        <button>Create</button>
                    </div>
                </div>

            </form>
        </div>
        <Footer />
    </div>
)}

export default SignUpForm;
