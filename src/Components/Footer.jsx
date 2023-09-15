import { useNavigate } from 'react-router-dom';
import React from 'react';
import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_in_logo from '../images/footer/bi_linkedin.png';

function App() {
    const navigate = useNavigate();
  
    return (
        <div className="bg-green-700 text-white w-full flex items-center justify-between h-[calc(0.1018*100vw)] lg:h-[calc(0.0625*100vw)] p-4 lg:p-10">
            {/* Your footer content here */}
            <div className="bg-green-700 text-white flex items-center justify-between p-4 lg:py-10">
                {/* Logo and Text */}
                <div className="flex items-center space-x-4 lg:space-x-8">
                    <button onClick={() => navigate('/')}>
                        <img src={logoInvert} alt="logo" className="w-6 h-6 lg:w-10 lg:h-10 shadow"/>
                    </button>
                    <button onClick={() => navigate('/')} className="text-xs font-bold lg:text-xl">
                        REMINDER ME
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center space-x-2 lg:space-x-10">
                    <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer">
                        <img src={github_logo} alt="github_logo" className="w-5 h-5 lg:w-8 lg:h-8"/>
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer">
                        <img src={linked_in_logo} alt="linked_in_logo" className="w-5 h-5 lg:w-8 lg:h-8"/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={note} alt="note_logo" className="w-5 h-5 lg:w-8 lg:h-8"/>
                    </a>
                </div>
            </div>
        </div>
    );
  }  

export default App;

