import { useNavigate } from 'react-router-dom';
import React from 'react';
import CombinedLogo from '../images/logoCombined.png';
import ReminderMelogo from '../images/reminder_me.png';
import ClearLogo from '../images/logo.png';

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
        <div className="container py-4 flex items-center justify-between ">
            <div className="flex items-center space-x-3">
                <button onClick={() => navigate('/')} className="block ">
                    <img src={ClearLogo} alt="logo" className="" />
                </button>
                <button onClick={() => navigate('/')} className="block">
                    <img src={ReminderMelogo} alt="Reminder Me logo" />
                </button>
            </div>
        </div>
    </div>
  );
}

export default Nav;
