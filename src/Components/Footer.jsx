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
    <button onClick={() => navigate('/')} className="inline-block p-0 m-0">
        <img src={logoInvert} alt="logo" className="mob:w-[26px] mob:h-[26px] desk:w-[52px] desk:h-[52px] p-0 m-0"/>
    </button>
    <button onClick={() => navigate('/')} className="inline-block mob:w-[90px] mob:h-[18px] text-white mob:text-xs font-bold desk:text-xl whitespace-nowrap p-0 m-0 desk:-ml-128">REMINDER ME</button>
    <div className="mob:ml-[180px] mob:w-[67px] mob:h-[16.9px] flex items-center">
        <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2">
            <img src={github_logo} alt="github_logo" />
        </a>
        <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2">
            <img src={linked_in_logo} alt="linked_in_logo" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2">
            <img src={note} alt="note_logo" />
        </a>
    </div>
</div>
    );
  }  

export default Footer;


