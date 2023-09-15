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
            <button onClick={() => navigate('/')} className="block">
                <img src={logoInvert} alt="logo" className="mob:w-[26px] mob:h-[26px] desk:w-[52px] desk:ml-5 desk:h-[52px]"/>
            </button>
            <button onClick={() => navigate('/')} className="mob:w-[90px] mob:h-[18px] text-white mob:text-xs font-bold desk:text-xl desk:">REMINDER ME</button>
            <div className="mob:ml-[180px] mob:w-[67px] mob:h-[16.9px] flex items-center">
                <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2">
                    <img src={github_logo} alt="github_logo" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="mob:inline-block mob:mr-2">
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
// function App() {
//     const navigate = useNavigate();
//     return (
//     <div className="bg-green-700 text-white px-4 md:px-16 lg:pl-[67px] lg:pr-[63px] py-2 md:py-4 lg:py-[25px] flex items-center justify-between">
//         <div className="flex items-center space-x-2.5 lg:space-x-[168px]">
//             <div className="flex items-center space-x-2">
//                 <button onClick={() => navigate('/')} className="block">
//                     <img src={logoInvert} alt="logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[62px] lg:h-[62px] "/>
//                 </button>
//                 <button onClick={() => navigate('/')} className="md:block text-xl font-bold">REMINDER ME</button>
//             </div>
//         </div>
//         <div className="flex space-x-2 md:space-x-4 lg:space-x-10">
//             <a href="https://github.com/jspades93/Reminder-Me" target="_blank" className="block">
//                 <img src={github_logo} alt="github_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
//             </a>
//             <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" className="block">
//                 <img src={linked_in_logo} alt="linked_in_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
//             </a>
//             <a href="#" target="_blank" className="block">
//                 <img src={note} alt="note_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
//             </a>
//         </div>
//     </div>
//     );

