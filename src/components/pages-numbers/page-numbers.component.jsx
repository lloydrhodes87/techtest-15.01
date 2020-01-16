import React from "react";
import './page-numbers.styles.scss';

const PageNumbers = ({ numOfPages, setClickedPage }) => {
  const pages = Array.from(Array(numOfPages).keys());
  const handleClick = num => {
    setClickedPage(num);
  };
  return (
    <div className='page-number-container'>
      {numOfPages &&
        pages.map(page => {
          return (
            <div key={page}>
              <button onClick={() => handleClick(page + 1)}>{page + 1}</button>
            </div>
          );
        })}
    </div>
  );
};

export default PageNumbers;
