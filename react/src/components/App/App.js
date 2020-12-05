import React, {Component} from 'react';
import Api from "../../apiJS/api";
import Search from "../SearchComponent";
import Checkbox from "../CheckboxComponent";

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedData: [],
            data: [],
            filter: {
                value: '',
                caseSensitive: true
            }
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { filter: { value, caseSensitive } } = this.state;
        const listOut = this.renderList();

        return (
            <div className="App">
                <Search
                    label="Search: "
                    value={value}
                    onChange={this.handleSearchChange}
                />
                <Checkbox
                    title="case-sensitive"
                    checked={caseSensitive}
                    onChange={this.handleCheckboxChange}
                />
                <div className="buttons-box">
                    <button id="buttonFindForLength" onClick={this.handleFindForLengthClick}>Number</button>
                    <button id="buttonFindForSubString" onClick={this.handleFindForSubStringClick}>String</button>
                </div>
                <div className='box-items'>
                    {listOut}
                </div>
            </div>
        )
    }

    renderList = () => {
        let output = null;
        let index = 0;
        const { data } = this.state;

        if (data) {
            output = data.map(item => (
                <p key={`${item}${index++}`} className="list-item">
                    {item}
                </p>
            ))
        }

        return output;
    };

    handleSearchChange = (value) => {
        this.changeFilter('value', value);
    };

    handleCheckboxChange = (checked) => {
        this.changeFilter("caseSensitive", checked);
    };


    handleFindForLengthClick = () => {
        this.filteredDataLength();
    };


    handleFindForSubStringClick = () => {
        this.filteredDataSubStr()
    };


    changeFilter(key, value) {
        const { filter } = this.state;
        const newFilter = {
            ...filter,
            [key]: value
        };

        this.setState({ filter: newFilter });
    };


    filteredDataLength() {
        const { filter: { value }, loadedData } = this.state;
        const number = parseInt(value, 10);

        if (!isNaN(number)) {
            const filteredData = loadedData.filter(it => it.length > number);

            this.setState({ data: filteredData });
        }
    };

    filteredDataSubStr() {
        const { filter: { caseSensitive, value }, loadedData } = this.state;
        const flag = !caseSensitive ? 'i' : '';
        const regexp = new RegExp(value, flag);

        if (value) {
            const filteredData = loadedData.filter(it => regexp.test(it));

            this.setState({ data: filteredData });
        }
    };

    loadData() {
        Api.loadData().then(data => {
            this.setState({
                loadedData: data,
                data
            });
        });
    };
};










