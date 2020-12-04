import React, {Component} from "react";
import './ButtonsBoxStyle.scss';

export default class ButtonsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            findForLength: props.findForLength,
            findForSubString: props.findForSubString,
        }
    }


    handleFindForLength = (event)=> {
        const {findForLength} = event.target;
        const {onChange} = this.props;

        if(onChange) {
            onChange(findForLength);
        }

        this.setState({findForLength});
    };

    handleFindForSubString = (event)=> {
        const {findForSubString} = event.target;
        const {onChange} = this.props;

        if(onChange) {
            onChange(findForSubString);
        }

        this.setState({findForSubString});
    };

    render() {
        return (
            <div className="buttons-box">
                <button id="buttonFindForLength" onClick={this.handleFindForLength}>Number</button>
                <button id="buttonFindForSubString" onClick={this.handleFindForSubString}>String</button>
            </div>
        );
    }
};


