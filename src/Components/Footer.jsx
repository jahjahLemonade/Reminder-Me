import { useNavigate } from 'react-router-dom';
import React from 'react';
import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_in_logo from '../images/footer/bi_linkedin.png';

function Footer() {
    const navigate = useNavigate();
  
    return (
        <div className="bg-green-700 text-white w-full flex items-center justify-between h-[calc(0.1018*100vw)] lg:h-[calc(0.0625*100vw)] p-4 lg:p-10">
            {/* Your footer content here */}
            <button onClick={() => navigate('/')} className="mob:block">
                <img src={logoInvert} alt="logo" className="mob:w-[26px] h-[26px]"/>
            </button>
            <button onClick={() => navigate('/')} className="mob:w-[90px] h-[18px] text-white text-xs font-bold">REMINDER ME</button>
            <div className="mob:ml-[190px] w-[67px] h-[16.9px] flex items-center">
                <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mr-2">
                    <img src={github_logo} alt="github_logo" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mr-2">
                    <img src={linked_in_logo} alt="linked_in_logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="mob:inline-block mr-">
                    <img src={note} alt="note_logo" />
                </a>
            </div>
        </div>
    );
  }  

export default Footer;

