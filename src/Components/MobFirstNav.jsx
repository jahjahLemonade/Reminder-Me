import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.png';
import ReminderMelogo from '../images/reminder_me.png';

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState('Home');

  const navigateToPage = (page) => {
    setActivePage(page);
    if (page === 'Home') {
      navigate('/');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-[#DDF3DE] text-black font-poppins">
      <div className="container mx-auto py-3 flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center space-x-3">
          <a href="#" className="block">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          </a>
          <a href="#" className="block">
            <img src={ReminderMelogo} alt="Reminder Me logo" />
          </a>
        </div>
        <div className="hidden md:flex space-x-3">
          {['Home', 'About', 'Contact'].map(page => (
            <button
              key={page}
              className={`px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => navigateToPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex space-x-4 pr-4">
          <button 
            className="w-full md:w-32 h-12 rounded-md border border-neutral-400 flex items-center justify-center transition-all duration-300"
          >
            <span className="text-center text-black text-sm md:text-base font-semibold">Sign Up</span>
          </button>
          <button 
            className="w-full md:w-32 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-md border border-white flex items-center justify-center transition-all duration-300"
          >
            <span className="text-center text-white text-sm md:text-base font-bold">Log in</span>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          {['Home', 'About', 'Contact'].map(page => (
            <a 
              key={page}
              href="#" 
              className={`block px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => navigateToPage(page)}
            >
              {page}
            </a>
          ))}
          <button 
            className="block px-4 py-2 mt-3 w-full md:w-32 h-12 rounded-md border border-neutral-400 flex items-center justify-center transition-all duration-300"
          >
            <span className="text-center text-black text-sm md:text-base font-semibold">Sign Up</span>
          </button>
          <button 
            className="block px-4 py-2 mt-3 w-full md:w-32 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-md border border-white flex items-center justify-center transition-all duration-300"
          >
            <span className="text-center text-white text-sm md:text-base font-bold">Log in</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;