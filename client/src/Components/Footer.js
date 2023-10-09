import React from 'react'
import clock from "../assets/clock.svg";

export const Footer = () => {
    return (
        <div className="flex px-[1.25rem] md:px-[2.5rem] xl:px-[3.75rem] justify-between w-full h-[5rem] bg-[#2F8431] mt-[5rem]">
            <div className="flex">
                <img className="w-12" src={clock} />
                <p className="flex text-lg text-[#FFF] font-bold items-center pb-[0.25rem]">REMINDER ME</p>
            </div>
            <div className="w-fit my-auto pb-[0.25rem]">
            <a
              className="pt-[0.5rem]"
              href="https://github.com/jspades93"
              target="_blank4"
              rel="noopener noreferrer"
            >
            <i className="fa fa-github" style={{ fontSize: "2rem", color: "white" }} /></a>
            <a
              className="pt-[0.5rem] mx-4 md:mx-8 lg:mx-[2.5rem]"
              href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/"
              target="_blank4"
              rel="noopener noreferrer"
            ><i className="fa fa-linkedin-square w-fit text-[#fff] text-[2rem]" /></a>
            <a
              className="pt-[0.5rem]"
              // href="https://docs.google.com/document/d/1EfZlvupeC7N0Htf6ja8LbqnHsZDsm4ri/edit?usp=sharing&ouid=114991490456747359591&rtpof=true&sd=true"
              target="_blank4"
              rel="noopener noreferrer"
            ><i className="fa fa-file-text" style={{ fontSize: "2rem", color: "white" }} /></a>
            </div>
        </div>)
}