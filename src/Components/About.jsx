import { useNavigate } from 'react-router-dom';
import React from 'react';
import AboutPic from '../images/about.png';
import GitLogo from '../images/devicon_github.png';
import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_in_logo from '../images/footer/bi_linkedin.png';

function App() {
    const navigate = useNavigate();
    return (
        <div className="about h-[852px] w-[393px] mx-auto p-0">
            <img 
                src={AboutPic} 
                alt="About Image" 
                className="mt-[77.25px] ml-[40.66px] mr-[27px] w-[325.34px] h-[216.37px]" 
            />

            <div 
                className="mt-[24.5px] ml-[31px] mr-[144px] w-[218px] h-[73px]"
            >
                <span className="text-black text-2xl font-bold leading-9">About This<br/></span>
                <span className="text-green-700 text-2xl font-bold leading-9">Application</span>
            </div>

            <div className="mt-[22px] ml-[31px] text-black text-xs font-normal leading-snug">
                Do You Have A Habit of Forgetting Stuff? Don't Worry!!!
                <br/>
                Here's Reminder Me to The Rescue.
                <br/><br/>
                Reminder Me is a reminder management application
                <br/>
                that lets you send reminders through text message.
                <br/>
                It lets you set a time/duration and a message for your
                <br/>
                reminder. And makes sure that it's sending out right on
                <br/>
                time, not letting you or your friends miss out on the
                <br/>
                important things in life.
            </div>

            <div className="ml-[31px] text-black text-xs font-semibold mt-2">Tech Stack</div>

            <div className="ml-[31px] mb-[86px]">
                <span className="text-black text-xs font-medium leading-tight"> Front-End:</span>
                <span className="text-black text-xs font-light leading-tight"> React, Tailwind<br/></span>
                <span className="text-black text-xs font-medium leading-tight"> Back-End:</span>
                <span className="text-black text-xs font-light leading-tight"> Node.js/Express.js, Firebase, Twilio API</span>
                <br/>
                <span className="text-black text-xs font-medium leading-tight"><p className='inline-block'>Link to GitHub: <img src={GitLogo} alt="Git Logo" className="inline-block" /></p></span>
            </div>
            <div className='footer'>
                <div className="w-[393px] h-10 bg-green-700 flex items-center">
                    <button onClick={() => navigate('/')} className="ml-5 block">
                        <img src={logoInvert} alt="logo" className="w-[26px] h-[26px] shadow"/>
                    </button>
                    <button onClick={() => navigate('/')} className="w-[90px] h-[18px] text-white text-xs font-bold">REMINDER ME</button>
                    <div className="ml-[168px] w-[67px] h-[16.9px] flex items-center">
                        <a href="https://github.com/jspades93/Reminder-Me" target="_blank" rel="noopener noreferrer" className="inline-block mr-2">
                            <img src={github_logo} alt="github_logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/joshua-lemay-bb288a13b/" target="_blank" rel="noopener noreferrer" className="inline-block mr-2">
                            <img src={linked_in_logo} alt="linked_in_logo" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mr-">
                            <img src={note} alt="note_logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
