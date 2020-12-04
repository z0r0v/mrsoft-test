import React, {Component} from "react";
import './SearchStyle.scss';


export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }

    }

    handleInputChange = (evt) => {
        const {value} = evt.target;
        const {onChange} = this.props;

        if(onChange) {
            onChange(value);
        }

        this.setState({value});
    };

    render() {
        const {value} = this.state;
        return (
            <div className="search">
                <label htmlFor="input">Search: </label>
                <input type="text" id="input" placeholder="Number or String" value={value} onChange={this.handleInputChange}/>
            </div>
        );
    }

};


