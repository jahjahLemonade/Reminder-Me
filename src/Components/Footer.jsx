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
            {/* <button onClick={() => navigate('/')} className="inline-block">
                <img src={logoInvert} alt="logo" className="mob:w-[26px] mob:h-[26px] desk:w-[53px] desk:h-[53px] desk:mt-2 desk:ml-5 2xl:w-[120px] 2xl:h-[100px]"/>
            </button>
            <button onClick={() => navigate('/')} className="inline-block mob:w-[90px] mob:h-[18px] text-white mob:text-xs font-bold desk:text-xl whitespace-nowrap desk:-ml-128 2xl:text-4xl 2xl:-ml-150 2xl:mb-4" >REMINDER ME</button>
            <div className="mob:ml-[180px] mob:w-[67px] mob:h-[16.9px] flex items-center justify-between desk:w-[205px] desk:h-[34px] desk:pr-[20px] md:w-[109px] md:h-[18px] md:pr-[10px] lg:w-[146px] lg:h-[24px] lg:pr-[14px] lgg:w-[248px] lgg:h-[40px] lgg:pr-[24px] 2xl:w-[364px] 2xl:h-[60px] 2xl:pr-[36px] xl:w-[284px] xl:h-[47px] xl:pr-[28px] 3xl:w-[400px] 3xl:h-[66px] 3xl:pr-[39px]">
                <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px] desk:mr-[40px] md:w-[18px] md:h-[18px] md:mr-[21px] lg:w-[24px] lg:h-[24px] lg:mr-[28px] lgg:w-[47px] lgg:h-[47px] lgg:mr-[53px] 2xl:w-[60px] 2xl:h-[60px] 2xl:mr-[71px] xl:w-[47px] xl:h-[47px] xl:mr-[56px] 3xl:w-[64px] 3xl:h-[64px] 3xl:mr-[78px]">
                    <img src={github_logo} alt="github_logo" className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px] desk:mr-[40px] md:w-[18px] md:h-[18px] md:mr-[21px] lg:w-[24px] lg:h-[24px] lg:mr-[28px] lgg:w-[47px] lgg:h-[47px] lgg:mr-[53px] 2xl:w-[60px] 2xl:h-[60px] 2xl:mr-[71px] xl:w-[47px] xl:h-[47px] xl:mr-[56px] 3xl:w-[64px] 3xl:h-[64px] 3xl:mr-[78px]">
                    <img src={linked_in_logo} alt="linked_in_logo" className="w-full h-full" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2 desk:w-[34px] desk:h-[34px] md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px] lgg:w-[47px] lgg:h-[47px] 2xl:w-[60px] 2xl:h-[60px] xl:w-[47px] xl:h-[47px] 3xl:w-[64px] 3xl:h-[64px]">
                    <img src={note} alt="note_logo" className="w-full h-full" />
                </a>
            </div> */}
        </div>
    );    
  }  
export default Footer;


