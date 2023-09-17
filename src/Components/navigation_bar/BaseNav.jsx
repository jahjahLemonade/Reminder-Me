import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import CombinedLogo from '../../images/logoCombined.png';
import ReminderMelogo from '../../images/reminder_me.png';
import ClearLogo from '../../images/logo.png';
import Vector from '../../images/Vector.png';


function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = React.useState(
    location.pathname === '/' ? 'Home' : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)
  );
  
  const [isOpen, setIsOpen] = React.useState(false);

  const navigateToPage = (page) => {
    setActivePage(page);
    if (page === 'Home') {
      navigate('/');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-[#DDF3DE] text-black font-poppins relative">
        <div className="flex items-center justify-between mt-[3.5%] ml-[3.4%]">
            {/* Nested flex for ReminderMe and Clear logos */}
            <div className="flex items-center space-x-3">
                <button onClick={() => navigate('/')} className="block mid:hidden">
                    <img src={CombinedLogo} alt="Reminder Me logo" />
                </button>
                <button onClick={() => navigate('/')} className="block hidden mid:inline">
                    <img src={ClearLogo} alt="logo" />
                </button>
                <button onClick={() => navigate('/')} className="block hidden mid:inline">
                    <img src={ReminderMelogo} alt="Reminder Me logo" />
                </button>
            </div>
            <div className="hidden lmd:flex flex-grow justify-center space-x-3">
                {['Home', 'About', 'Contact'].map(page => (
                    <button
                        key={page}
                        className={`px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 ${page === activePage ? 'text-[#2F8331]' : 'text-black'}`}
                        onClick={() => navigateToPage(page)}
                    >
                        <span className={page === activePage ? 'border-b-2 border-[#2F8331]' : ''}>
                            {page}
                        </span>
                    </button>
                ))}
            </div>
                <div className="flex space-x-4 pr-6 hidden lmd:flex">  {/* Added "hidden md:flex" here */} 
                <button 
                    className="block px-4 py-2 mt-3 w-3/5 mx-auto md:w-32 h-12 rounded-md border border-neutral-400 flex items-center justify-center transition-all duration-300"
                >
                    <span className="text-center text-black text-sm md:text-base font-semibold">Sign Up</span>
                </button>
                <button 
                    className="block px-4 py-2 mt-3 w-3/5 mx-auto md:w-32 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-md border border-white flex items-center justify-center transition-all duration-300"
                >
                    <span className="text-center text-white text-sm md:text-base font-bold">Log in</span>
                </button>
            </div>
            <div className="lmd:hidden mt-1.5 mr-[3.4%] ">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={Vector} alt="Menu" />
                </button>
            </div>
        </div>
        {isOpen && (
            <div className="absolute z-10 w-full flex flex-col items-center bg-white bg-opacity-60 backdrop-blur-md pb-4"> {/* Applied blur effect and made background slightly transparent */}
                {['Home', 'About', 'Contact'].map(page => (
                    <a 
                    key={page}
                    href="#" 
                    className={`block px-3 py-2 text-center text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
                    onClick={() => navigateToPage(page)}
                    >
                    {page}
                    </a>
                ))}
                <button 
                    className="block px-4 py-2 mt-3 w-3/5 h-12 rounded-md border border-neutral-400 flex items-center justify-center transition-all duration-300"
                >
                    <span className="text-center text-black text-sm md:text-base font-semibold">Sign Up</span>
                </button>
                <button 
                    className="block px-4 py-2 mt-3 w-3/5 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-md border border-white flex items-center justify-center transition-all duration-300"
                >
                    <span className="text-center text-white text-sm md:text-base font-bold">Log in</span>
                </button>
            </div>
        )}
    </div>
  );
}

export default Nav;
