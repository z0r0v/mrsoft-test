import React, { useState } from "react";
import './CheckboxStyle.scss';
const Checkbox = () => {

    const [x, setX] = useState(true);
    const soldCheckbox = ({ target: { checked } }) => {
        console.log(x, checked);
        setX(checked);
    };

    return (
        <div>
            <label htmlFor="checkbox">case-sensitive</label>
            <input type="checkbox" id="checkBox" checked={x} onChange={soldCheckbox}/>
        </div>
    );
};
export default Checkbox;
