import React, { Component } from 'react';

import './CheckboxStyle.scss';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked || false,
            title: props.title || '',
        }
    }

    componentDidUpdate() {
        if (this.props.checked !== this.state.checked) {
            this.setState({ checked: this.props.checked })
        }
    }

    render() {
        const { checked, title } = this.state;

        return (
            <div className='box-checkbox'>
                <label htmlFor='checkbox'>{title}</label>
                <input type='checkbox' id='checkBox'
                       checked={checked}
                       onChange={this.handleCheckboxChange}
                />
            </div>
        );
    }

    handleCheckboxChange = (event) => {
        const { checked } = event.target;
        const { onChange } = this.props;

        if (onChange) {
            onChange(checked);
        }

        this.setState({ checked });
    };
};


