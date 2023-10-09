import React from 'react';
import { Link } from "react-router-dom";
import { Footer } from './Footer';
import lady from "../assets/lady.png"
import alarm from "../assets/alarm.svg"
import time from "../assets/time.svg"
import call from "../assets/call.svg"


const LandingPage = () => {
    return (
        <div>
            <div className="px-[1.25rem] mb-48 | lg:mb-24 md:px-[4.125rem] lg:px-[1.25rem] | xl:px-[9.75rem]">
                <div className="flex flex-col | lg:flex-row | xl:justify-center">
                    <div className="lg:order-last"><img className="w-full lg:max-w-[45rem]" src={lady} /><br /></div>

                    <div className="lg:flex lg:flex-col lg:justify-center">
                        <div className="font-Poppins text-2xl md:text-5xl xl:text-[4rem] font-semibold | md:max-w-[34rem]"><p>Don't Miss Out On The <span className="text-[#2F8331]">Important Things</span></p></div>
                        <br />

                        <div className="text-lg font-[300] | md:max-w-[34rem]">
                            <p>Do you or someone you know have a habit of forgetting stuff?
                            Don't worry!!! here's
                    <span className="text-[#2F8331]"> Reminder Me</span> to the rescue.</p>
                        </div>
                        <br />
                        <div className="flex items-center justify-center w-[11rem] h-[4rem] text-lg font-semibold text-[#fff] bg-gradient-to-r from-green-500 to-green-800 mx-auto mb-8 border border-[#fff] rounded-xl | md:ml-0 | lg:w-[16rem]">
                            <Link to="/Signup">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center | md:mt-20 | lg:flex-row lg:mt-24 | xl:justify-center">
                    <div className="flex flex-col justify-around px-4 w-full max-w-[25rem] h-[11rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg | md:h-[17rem]">
                        <img className="w-8 sm:w-12" src={alarm} />
                        <p className="text-[1rem] font-[500] | md:text-2xl">Schedule Messages with Ease</p>
                        <p className="text-[0.85rem] | md:text-lg">Schedule important messages up to 7 days ahead effortlessly
                            with our user-friendly reminder application.</p>
                    </div>
                    <div className="flex flex-col justify-around px-4 my-8 w-full max-w-[25rem]  h-[11rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg | md:h-[17rem] | lg:mx-4 | xl:mx-8">
                        <img className="w-8 sm:w-12" src={time} />
                        <p className="text-[1rem] font-[500] | md:text-2xl">Efficient Reminder Management</p>
                        <p className="text-[0.85rem] | md:text-lg">Manage your reminders efficiently to ensure you
                            or love ones never miss a beat.</p>
                    </div>
                    <div className="flex flex-col justify-around px-4 w-full max-w-[25rem] h-[11rem] bg-white shawdow-[-2.57px 2.57px 0px 0px #FFF inset] rounded-lg | md:h-[17rem]">
                        <img className="w-[2.6rem] sm:w-16" src={call} />
                        <p className="text-[1rem] font-[500] | md:text-2xl">Provided Phone Number</p>
                        <p className="text-[0.85rem] | md:text-lg">Stay connected with ease with provided phone number
                            for timely notifications</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LandingPage