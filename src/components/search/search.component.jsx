import React, { useState } from 'react';
import fetchPerson from '../../utils/fetchPerson.js';

const Search = ({getPersonData}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        
        const { value } = event.target;
        console.log(value)
        setSearchTerm(value);
    }

    const handleClick = () => {
        console.log(searchTerm)
        fetchPerson(searchTerm)
            .then((data) => {
                console.log('data', data)
                setSearchTerm('');
                getPersonData(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <label htmlFor='search'>Search</label>
            <input onChange={handleChange} type='text' value={searchTerm}></input>

            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search