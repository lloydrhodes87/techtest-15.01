import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import ListItem from "../../components/list-item/list-item.component";
import PageNumbers from "../../components/pages-numbers/page-numbers.component";
import Search from "../../components/search/search.component";

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

  const getPersonData = ({results}) => {
        setPersonList(results);
        setNumOfPages(null);
  }

  return (
    <div>
      <Search getPersonData={getPersonData}/>
      {loaded &&
        personList.map(person => (
          <ListItem person={person} key={person.name} />
        ))}
      <PageNumbers numOfPages={numOfPages} setClickedPage={setClickedPage} />
    </div>
  );
};

export default Home;
