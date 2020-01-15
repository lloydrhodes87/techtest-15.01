import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import ListItem from "../../components/list-item/list-item.component";
import PageNumbers from "../../components/pages-numbers/page-numbers.component";
import Search from "../../components/search/search.component";

import "./home.styles.scss";

const Home = () => {
  const [personList, setPersonList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [numOfPages, setNumOfPages] = useState(null);
  const [clickedPage, setClickedPage] = useState(1);

  useEffect(() => {
    fetchData(clickedPage)
      .then(data => {
        const { count, results } = data;
        setPersonList(results);
        setNumOfPages(Math.ceil(count / 10));
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
        setLoaded(false);
      });
  }, [clickedPage]);

  const getPersonData = ({ results }) => {
    setPersonList(results);
    setNumOfPages(null);
  };

  return (
    <div className="container">
      <div className="header-section">
        <div className="heading">
          <h1>Star Wars Folk</h1>
        </div>
        <div className="search">
          <Search getPersonData={getPersonData} />
        </div>
      </div>
      <div className="body-section">
        {loaded &&
          personList.map(person => (
            <div className="list-item">
              <ListItem person={person} key={person.name} />
            </div>
          ))}
      </div>
      <div className="page-numbers">
        <PageNumbers numOfPages={numOfPages} setClickedPage={setClickedPage} />
      </div>
    </div>
  );
};

export default Home;
