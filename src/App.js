import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Navigation links can go here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Footer />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
