import React, { useState, useEffect } from 'react';

const PageNumbers = ({numOfPages, setClickedPage}) => {
    const pages = Array.from(Array(numOfPages).keys())
    
    const handleClick = (num) => {
        setClickedPage(num)
    }
    return (
        <div>
            {
            pages.map(page => {
                return (
                    <div key={page}>      
                        <button onClick={() => handleClick(page + 1)}>{page + 1}</button>
                    </div>
                )
                
            })
            
            }
        </div>
    )
}

export default PageNumbers;