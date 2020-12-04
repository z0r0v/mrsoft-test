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
        }
    }

    componentDidMount() {
        this.loadData();
    }


    renderList = () => {
        let output = null;

        const {loadedData} = this.state;

        if(loadedData) {
            output = loadedData.map(item => (
                <p className="list-item" key={item.index}>
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

    render() {
        const listOut = this.renderList();
        return (
            <div className="App">
                <Search/>
                <Checkbox/>
                <ButtonsBox/>
                <div className='box-items' >
                    {listOut}
                </div>
            </div>
        )
    }

};










