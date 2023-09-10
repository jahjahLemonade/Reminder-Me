import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Navigation links can go here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
