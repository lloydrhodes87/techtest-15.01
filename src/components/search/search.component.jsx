import React, { useState } from "react";
import fetchPerson from "../../utils/fetchPerson.js";
import "./search.styles.scss";

const Search = ({ getPersonData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleClick = () => {
    fetchPerson(searchTerm)
      .then(data => {
        setSearchTerm("");
        getPersonData(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="search-container">
      <input onChange={handleChange} type="text" value={searchTerm}></input>

      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
