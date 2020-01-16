import React, { useState } from "react";
import fetchPerson from "../../utils/fetchPerson.js";
import "./search.styles.scss";
import NotFound from "../not-found/not-found.component.jsx";

const Search = ({ getPersonData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState()

  const handleChange = event => {
    const { value } = event.target;
    setNotFound(false)
    setSearchTerm(value);
  };

  const handleClick = () => {
    fetchPerson(searchTerm)
      .then(data => {
      
        if (data.results.length > 0) {
          setSearchTerm("");
          getPersonData(data);
        } else {
          setNotFound(true)
        }
      })
      .catch(() => {
        
      });
  };

  return (
    <div className="search-container">
      <input onChange={handleChange} type="text" value={searchTerm}></input>

      <button onClick={handleClick}>Search</button>
      {
        notFound && 
          <NotFound />
      }
    </div>
  );
};

export default Search;
