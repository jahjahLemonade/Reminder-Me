import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.png';
import ReminderMelogo from '../images/reminder_me.png';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState('Home'); // For demo purposes

  return (
    <div className="bg-[#DDF3DE] text-black font-poppins">
      <div className="container mx-auto py-3 flex items-center justify-between pt-[51px] pl-[0px] pr-[0px]">
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
            <a 
              key={page}
              href="#" 
              className={`px-3 py-2 text-lg font-medium ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <button 
            className="w-[126.58px] h-[50.63px] rounded-md border border-neutral-400 flex items-center justify-center"
          >
            <span className="w-[70.89px] h-[21.52px] text-center text-black text-sm font-semibold">Sign Up</span>
          </button>
          <button 
            className="w-[126.58px] h-[50.63px] bg-gradient-to-r from-green-600 to-green-700 rounded-[9px] border border-white flex items-center justify-center"
          >
            <span className="w-[58.23px] h-[21.52px] text-center text-white text-sm font-bold">Log in</span>
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
              className={`block px-3 py-2 text-lg font-medium ${page === activePage ? 'text-[#2F8331] border-b-2 border-[#2F8331]' : 'text-black'}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
          <button 
            className="block px-4 py-2 mt-3 w-[126.58px] h-[50.63px] rounded-md border border-neutral-400 flex items-center justify-center"
          >
            <span className="w-[70.89px] h-[21.52px] text-center text-black text-sm font-semibold">Sign Up</span>
          </button>
          <button 
            className="block px-4 py-2 mt-3 w-[126.58px] h-[50.63px] bg-gradient-to-r from-green-600 to-green-700 rounded-[9px] border border-white flex items-center justify-center"
          >
            <span className="w-[58.23px] h-[21.52px] text-center text-white text-sm font-bold">Log in</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
