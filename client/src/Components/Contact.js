import React, { useState, useCallback, useRef, useContext } from 'react'
import { AuthContext } from "./Auth";
import { Footer } from './Footer.js'
import contact from "../assets/contact.png"
import emailIcon from "../assets/email1.svg"
import nameIcon from "../assets/name.svg"
import msg from "../assets/msg.svg"
import Navbar from './Navbar';

const Contact = () => {
  const { currUser } = useContext(AuthContext);
  let contactPageTabs = ["Logout"];
  if (!currUser) {
    contactPageTabs = ["Sign Up", "Login"];
  }
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef()

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message }),
    });

    if (response.ok) {
      alert('Email sent successfully');
    } else {
      alert('Error sending email');
    }
    //reset input element
    formRef.current.reset()
  }, [email, name, message]);


  return (
    <div>
        <Navbar tabs={contactPageTabs} />
        <div className="px-[1.25rem] mb-48 lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] xl:px-[9.75rem]">
            <form ref={formRef} className="flex flex-col lg:flex-row  justify-center lg:justify-around bg-[#fff] mt-8 md:mt-20 lg:pt-24 lg:pb-16 rounded-xl" onSubmit={handleSubmit}>
                <div className="flex justify-center | lg:py-16 lg:order-last"><img className="w-full sm:max-w-[45rem]" src={contact} /></div>
                <div className="w-full lg:max-w-[32rem] px-[0.6rem] lg:flex lg:flex-col lg:justify-center">
                    <div>
                        <p className="text-[1.25rem] font-semibold md:text-[1.75rem] lg:text-[2rem] mb-[2.62rem]">Contact me/Feedback</p>
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="contact_number">Name</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={nameIcon} />
                                <input onChange={(e) => setName(e.target.value)} type="text" autoComplete="on" placeholder={`Enter name`} required />
                            </div>
                        </div> 
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="contact_email">Email</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                            <img className="w-[2.2rem] pr-[0.7rem]" src={emailIcon} />
                                <input onChange={(e) => setEmail(e.target.value)} type='email' autoComplete="on" placeholder={`Enter email`} required/>
                            </div>
                        </div> 
                        <div className="mt-8 mb-[1.25rem]">
                        <label htmlFor="signup_password">Message</label>
                            <div className="flex w-full h-[5rem] py-4 px-[0.5rem] border border-[#EAEBF6] rounded-lg">
                                <img className="w-8 pr-[0.7rem]" src={msg} />
                                <input onChange={(e) => setMessage(e.target.value)} type="text" autoComplete="on" placeholder={`Write message`} required />
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