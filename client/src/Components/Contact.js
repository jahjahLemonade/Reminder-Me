import React, { useState, useCallback, useContext } from 'react'
import { Redirect } from 'react-router'
import { Footer } from './Footer.js'
import contact from "../assets/contact.png"
import email from "../assets/email1.svg"
import phone from "../assets/phone.svg"
import msg from "../assets/msg.svg"




const Contact = () => {


  return (
    <div>
        <div className="px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
            <form className="flex flex-col lg:flex-row  justify-center lg:justify-around bg-[#fff] mt-8 md:mt-20 lg:pt-24 lg:pb-16 rounded-xl" onSubmit={""}>
                <div className="flex justify-center | lg:py-16 lg:order-last"><img className="w-full sm:max-w-[45rem]" src={contact} /></div>
                <div className="w-full lg:max-w-[32rem] px-[0.6rem] lg:flex lg:flex-col lg:justify-center">
                    <div>
                        <p className="text-[1.25rem] font-semibold md:text-[1.75rem] lg:text-[2rem] mb-[2.62rem]">Contact me/Feedback</p>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="contact_email">Email</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                            <img className="w-[2.2rem] pr-[0.7rem]" src={email} />
                                <input type='email' autoComplete="on" placeholder={`Enter email`} required />
                            </div>
                        </div>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="contact_number">Cotact</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={phone} />
                                <input type="number" autoComplete="on" placeholder={`Enter Phone number`} required />
                            </div>
                        </div>  
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="signup_password">Message</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={msg} />
                                <input type="text" autoComplete="on" placeholder={`Write message`} required />
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

export default Contact