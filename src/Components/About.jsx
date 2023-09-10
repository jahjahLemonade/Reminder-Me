import { useNavigate } from 'react-router-dom';
import React from 'react';
import AboutPic from '../images/about.png';

function App() {
    const navigate = useNavigate();
    return (
    <div className="about">
        <img className="w-[325.34px] h-[216.37px]" src="https://via.placeholder.com/325x216" />
    </div>
    );
}

export default App;
