import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Navigation links can go here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
