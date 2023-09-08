import React from 'react';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">REMINDER ME</div>
          <div className="hidden md:flex">
            <a href="#" className="px-3 py-2">Home</a>
            <a href="#" className="px-3 py-2">About</a>
            <a href="#" className="px-3 py-2">Sign Up</a>
            <a href="#" className="px-3 py-2">Login</a>
            <a href="#" className="px-3 py-2">Contact</a>
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
            <a href="#" className="block px-3 py-2">Sign Up</a>
            <a href="#" className="block px-3 py-2">Login</a>
            <a href="#" className="block px-3 py-2">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;