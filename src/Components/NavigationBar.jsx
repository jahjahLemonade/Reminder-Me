import React from 'react';
import logo from '../images/logo.png';
import ReminderMelogo from '../images/reminderMe.png';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState('Home'); // For demo purposes

  return (
    <div style={{ backgroundColor: '#DDF3DE' }} className="text-black font-poppins">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between" style={{ paddingTop: '51px', paddingLeft: '67px' }}>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-3 rounded-full" />
          <img src={ReminderMelogo} alt="logo"/>
        </div>
        <div className="hidden md:flex space-x-3">
          {['Home', 'About', 'Contact'].map(page => (
            <a 
              key={page}
              href="#" 
              className={`px-3 py-2 text-sm font-medium ${page === activePage ? 'text-#2F8331 border-b-2 border-#2F8331' : ''}`}
              style={{ fontSize: '18px', fontWeight: '500' }}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
        </div>

        <div className="flex space-x-4">
          <button 
            style={{ 
              borderColor: '#9F9F9F',
              width: '126.58px',
              height: '50.63px'
            }}
            className="border rounded-md bg-transparent text-black font-semibold"
          >
            Sign Up
          </button>
          <button 
            style={{ 
              background: 'linear-gradient(to right, #3DA93f, #2F8331)',
              width: '126.58px',
              height: '50.63px'
            }}
            className="rounded-md text-white font-semibold"
          >
            Log in
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
              className={`block px-3 py-2 text-sm font-medium ${page === activePage ? 'text-#2F8331 border-b-2 border-#2F8331' : ''}`}
              style={{ fontSize: '18px', fontWeight: '500' }}
              onClick={() => setActivePage(page)}
            >
              {page}
            </a>
          ))}
          <button 
            style={{ 
              borderColor: '#9F9F9F',
              width: '126.58px',
              height: '50.63px'
            }}
            className="block px-4 py-2 border rounded-md bg-transparent text-black font-semibold mt-3"
          >
            Sign Up
          </button>
          <button 
            style={{ 
              background: 'linear-gradient(to right, #3DA93f, #2F8331)',
              width: '126.58px',
              height: '50.63px'
            }}
            className="block px-4 py-2 rounded-md text-white font-semibold mt-3"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;