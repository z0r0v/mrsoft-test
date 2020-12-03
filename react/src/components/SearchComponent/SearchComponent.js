import React from "react";
import './SearchStyle.scss';

const Search = () => {
    return (
        <div className="search">
            <label htmlFor="input">Search:</label>
            <input type="text" id="input" placeholder="Number or String"/>
        </div>
    );

};


export default Search;