import { useNavigate } from 'react-router-dom';
import React from 'react';
import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_in_logo from '../images/footer/bi_linkedin.png';
import Styles from '../App.css';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="bg-green-700 text-white w-full flex items-center justify-between h-[calc(0.1018*100vw)] xl:h-[calc(0.0625*100vw)] p-4 xl:p-10">
            {/* Your footer content here */}
            <button onClick={() => navigate('/')} className="inline-block">
                <img src={logoInvert} alt="logo" className="mob:w-[26px] mob:h-[26px] xs:w-[24px] sm:w-[26px] md:w-[35px] lg:w-[44px] desk:w-[53px] 2xl:w-[62px] desk:mt-2 desk:ml-5"/>
            </button>
            <button onClick={() => navigate('/')} className="inline-block mob:w-[90px] mob:h-[18px] text-white mob:text-xs font-bold md:text-lg lg:text-xl desk:text-xl desk:-ml-128 2xl:text-2xl 2xl:-ml-160">REMINDER ME</button>
            <div className="mob:ml-[180px] mob:w-[67px] mob:h-[16.9px] xs:w-[64px] sm:w-[67px] md:w-[97px] md:h-[24px] lg:w-[130px] lg:h-[30px] desk:w-[205px] desk:h-[34px] 2xl:w-[240px] 2xl:h-[40px] flex items-center justify-between pr-0 desk:pr-[20px] 2xl:pr-[30px]">
                <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 xs:w-[23px] xs:h-[23px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[32px] desk:w-[34px] 2xl:w-[40px] desk:mr-[40px] 2xl:mr-[45px]">
                    <img src={github_logo} alt="github_logo" className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 xs:w-[23px] xs:h-[23px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[32px] desk:w-[34px] 2xl:w-[40px] desk:mr-[40px] 2xl:mr-[45px]">
                    <img src={linked_in_logo} alt="linked_in_logo" className="w-full h-full" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 xs:w-[23px] xs:h-[23px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[32px] desk:w-[34px] 2xl:w-[40px]">
                    <img src={note} alt="note_logo" className="w-full h-full" />
                </a>
            </div>
        </div>
    );    
  }  

export default Footer;


