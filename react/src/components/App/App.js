import './App.scss';
import Api from "../../js/api";

import React, {Component} from 'react';

//components
import Search from "../SearchComponent";
import Checkbox from "../CheckboxComponent";
import ButtonsBox from "../ButtonsBox";


export default class App extends Component {
    state = {
        loadedData: [],
    };

    loadData() {
        Api.loadData().then(data => {
            this.setState(data);
        });
    };


    render() {
        this.loadData();

        console.log(this.state);


        return(
            <div className="App">
                <Search/>
                <Checkbox/>
                <ButtonsBox/>
            </div>
        )
    }
};










