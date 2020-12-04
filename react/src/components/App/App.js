import './App.scss';
import Api from "../../js/api";

import React, {Component} from 'react';

//components
import Search from "../SearchComponent";
import Checkbox from "../CheckboxComponent";
import ButtonsBox from "../ButtonsBox";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            loadedData: [],
            data: [],
            string: '',
            checked: true,
            findForLength: null,
            findForSubString: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        // тут перендер с фильрами
    }

    renderList = () => {
        let output = null;

        const {loadedData} = this.state;

        if(loadedData) {
            output = loadedData.map(item => (
                <p key={item.toString()} className="list-item" >
                    {item}
                </p>
            ))
        }

        return output;
    };

    loadData() {
        Api.loadData().then(data => {
            this.setState({
                loadedData: data
            });
        });
    };

    handleSearchChange = (value) => {
      this.setState({string:value})
    };

    handleCheckboxChange = (checked)=> {
        this.setState({checked:checked});
    };


    render() {
        const listOut = this.renderList();
        const {string, checked, findForLength, findForSubString} = this.state;

        return (
            <div className="App">

                <Search
                value={string}
                onChange={this.handleSearchChange}
                />

                <Checkbox
                    checked={checked}
                    onChange={this.handleCheckboxChange}
                />

                <ButtonsBox
                    findForLength={findForLength}
                    findForSubString={findForSubString}
                />


                <div className='box-items' >
                    {listOut}
                </div>


            </div>
        )
    }

};










