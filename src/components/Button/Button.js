import React from "react";
import './Button.css'

const Button = ({ handleClick, btnName }) => {
  return (
    <div >
      <button className="button" value={btnName} onClick={handleClick}>
       {btnName}
      </button>
    </div>
  );
};

export default Button;
