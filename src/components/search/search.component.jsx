import React from 'react';

const Search = () => {
    

    return (
        <div>
            <label htmlFor='search'>Search</label>
            <input onChange={handleChange} type='text' value></input>
        </div>
    )
}

export default Search