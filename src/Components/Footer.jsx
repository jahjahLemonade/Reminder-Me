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
        <div className="bg-green-700 text-white w-full flex items-center justify-between h-[calc(0.1018*100vw)] lg:h-[calc(0.0625*100vw)] p-4 lg:p-10">
            {/* Your footer content here */}
            <button onClick={() => navigate('/')} className="inline-block">
                <img src={logoInvert} alt="logo" className="mob:w-[26px] mob:h-[26px] desk:w-[53px] desk:h-[53px] desk:mt-2 desk:ml-5"/>
            </button>
            <button onClick={() => navigate('/')} className="inline-block mob:w-[90px] mob:h-[18px] text-white mob:text-xs font-bold desk:text-xl whitespace-nowrap desk:-ml-128">REMINDER ME</button>
            <div className="mob:ml-[180px] mob:w-[67px] mob:h-[16.9px] flex items-center justify-between desk:w-[232px] desk:h-[34px] pr-0 desk:pr-[60px]">
                <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px] desk:mr-[40px]">
                    <img src={github_logo} alt="github_logo" className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px] desk:mr-[40px]">
                    <img src={linked_in_logo} alt="linked_in_logo" className="w-full h-full" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px]">
                    <img src={note} alt="note_logo" className="w-full h-full" />
                </a>
            </div>
        </div>
    );
  }  

export default Footer;


