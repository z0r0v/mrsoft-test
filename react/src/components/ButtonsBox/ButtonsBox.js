import React from "react";
import './ButtonsBoxStyle.scss';

const ButtonsBox = () => {
    return (
        <div className="buttons-box">
            <button id="buttonFindForLength">Number</button>
            <button id="buttonFindForSubString">String</button>
        </div>
    );
};

export default ButtonsBox;
