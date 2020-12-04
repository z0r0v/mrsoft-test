import React, {Component} from "react";
import './CheckboxStyle.scss';



export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
        }
    }

    handleCheckboxChange = (event)=> {
        const {checked} = event.target;
        const {onChange} = this.props;

        if(onChange) {
            onChange(checked);
        }

        this.setState({checked});
    };

    render() {
        const {checked} = this.state;
        return (
            <div>
                <label htmlFor="checkbox">case-sensitive</label>
                <input type="checkbox" id="checkBox"
                       checked={checked}
                       onChange={this.handleCheckboxChange}
                />
            </div>
        );
    }


};


