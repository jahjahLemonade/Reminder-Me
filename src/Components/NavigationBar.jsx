import React from 'react';
import logo from '../images/logo.png';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ backgroundColor: '#DDF3DE' }} className="text-black">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-3 rounded-full" />
          <div className="text-xl font-bold" style={{ color: '#318A33' }}>REMINDER ME</div>
        </div>
        <div className="hidden md:flex space-x-3">
          <a href="#" className="px-3 py-2">Home</a>
          <a href="#" className="px-3 py-2">About</a>
          <a href="#" className="px-3 py-2">Contact</a>
        </div>

        <div className="flex space-x-3">
          <button className="px-4 py-2 border rounded-md">Login</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">Sign Up</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-3 py-2">Home</a>
          <a href="#" className="block px-3 py-2">About</a>
          <a href="#" className="block px-3 py-2">Contact</a>
          <button className="block px-4 py-2 border rounded-md">Login</button>
          <button className="block px-4 py-2 bg-black text-white rounded-md">Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default App;

