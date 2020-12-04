import './App.scss';
import Api from "../../js/api";

import React, {Component} from 'react';

//components
import Search from "../SearchComponent";
import Checkbox from "../CheckboxComponent";



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            loadedData: [],
            data: [],
            string: '',
            checked: true,
            filter: {
                string: '',
                caseSensitive: false
            }
        }

    }

    componentDidMount() {
        this.loadData();
    }

    renderList = () => {
        let output = null;

        const {data} = this.state;

        if(data) {
            output = data.map(item => (
                <p key={item.toString()} className="list-item">
                    {item}
                </p>
            ))
        }

        return output;
    };

    loadData() {
        Api.loadData().then(data => {
            this.setState({
                loadedData: data,
                data
            });
        });
    };

    handleSearchChange = (value) => {
      this.setState({string:value});
    };

    handleCheckboxChange = (checked)=> {
        this.setState({checked:checked});
    };


    handleFindForLength = () => {
        this.filteredData();
    };



    handleFindForSubString = () => {

    };


    changeFilter(key, value) {
        const {filter} = this.state;
        filter = {
            ...filter,
            [key]: value
        }
    };


    filteredData() {
        const {loadedData, string} = this.state;
        const length = parseInt(string, 10);
        const filteredData = loadedData.filter(it => it.length > length);
         this.setState({data: filteredData});
    };



    render() {
        const listOut = this.renderList();
        const {string, checked} = this.state;

        return (
            <div className="App">

                <Search
                value={string}
                onChange={this.handleSearchChange}
                />

                <Checkbox
                    title="case-sensitive"
                    checked={checked}
                    onChange={this.handleCheckboxChange}
                />

                <div className="buttons-box">
                    <button id="buttonFindForLength" onClick={this.handleFindForLength}>Number</button>
                    <button id="buttonFindForSubString" onClick={this.handleFindForSubString}>String</button>
                </div>


                <div className='box-items' >
                    {listOut}
                </div>


            </div>
        )
    }

};










