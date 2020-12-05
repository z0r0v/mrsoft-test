import React, { Component } from "react";
import './CheckboxStyle.scss';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
            title: props.title,
        }
    }

    handleCheckboxChange = (event)=> {
        const { checked } = event.target;
        const { onChange } = this.props;

        if(onChange) {
            onChange(checked);
        }

        this.setState({ checked });
    };

    render() {
        const { checked, title } = this.state;
        return (
            <div className="box-checkbox">
                <label htmlFor="checkbox">{ title }</label>
                <input type="checkbox" id="checkBox"
                       checked={ checked }
                       onChange={ this.handleCheckboxChange }
                />
            </div>
        );
    }


};


