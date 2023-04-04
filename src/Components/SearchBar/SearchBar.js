
import React from 'react';

export default function SearchBar(props) {

    function handleSearch(e) {
        props.searchTable(e.target.value);
    }


    return (
        <div className='searchBar'>
            <input type='search' placeholder='Search' onChange={(e) => handleSearch(e)} className='searchBar_input' />
        </div>
    )
}
