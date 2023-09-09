import React from 'react';
import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_in_logo from '../images/footer/bi_linkedin.png';

function App() {
    return (
    <div className="bg-green-700 text-white px-4 md:px-16 lg:pl-[67px] lg:pr-[63px] py-2 md:py-4 lg:py-[25px] flex items-center justify-between">
        <div className="flex items-center space-x-2.5 lg:space-x-[168px]">
            <div className="flex items-center space-x-2">
                <a href="#" target="_blank" className="block">
                    <img src={logoInvert} alt="logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[62px] lg:h-[62px] "/>
                </a>
                <a href="#" target="_blank" className="md:block text-xl font-bold">REMINDER ME</a>
            </div>
        </div>
        <div className="flex space-x-2 md:space-x-4 lg:space-x-10">
            <a href="#" target="_blank" className="block">
                <img src={github_logo} alt="github_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
            </a>
            <a href="#" target="_blank" className="block">
                <img src={linked_in_logo} alt="linked_in_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
            </a>
            <a href="#" target="_blank" className="block">
                <img src={note} alt="note_logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px]"/>
            </a>
        </div>
    </div>
    );
}

export default App;
