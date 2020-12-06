import React, { Component } from 'react';

import './SearchStyle.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            label: props.label || '',
        }
    }

    componentDidUpdate() {
        const {value, label} = this.state;
        this.changeStateProps(this.props.value, this.state.value, value);
        this.changeStateProps(this.props.label, this.state.label, label);
    }

    render() {
        const { value, label } = this.state;

        return (
            <div className='search'>
                <label htmlFor='input'>{label}</label>
                <input type='text' id='input' placeholder='Number or String'
                       value={value}
                       onChange={this.handleInputChange}/>
            </div>
        );
    }

    handleInputChange = (evt) => {
        const { value } = evt.target;
        const { onChange } = this.props;

        if (onChange) {
            onChange(value);
        }

        this.setState({ value });
    };

    changeStateProps(props, state, key) {
        if(props !== state) {
            this.setState({ [key]:props });
        }
    };
};
