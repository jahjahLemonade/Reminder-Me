import React from 'react'
import logo from '../Bitmap.png'
import "../CSS/Rotate.css";


const Rotate = ({style}) => {
    return (
      <div>
        <img
          src={logo}
          style={style}
          className="rotate"
          width="100"
          height="100"
          alt='logo'
        />
      </div>
    );
    

}

export default Rotate