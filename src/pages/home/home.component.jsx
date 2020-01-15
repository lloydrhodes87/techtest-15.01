import React, { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';
import ListItem from '../../components/list-item/list-item.component';

const Home = () => {
    const [personList, setPersonList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [pageAmount, setPageAmount] = useState(null)
    
    useEffect(() => {
        fetchData()
            .then((data) => {
                const { count, results} = data
                setPersonList(results);
                setPageAmount(Math.ceil(count / 10))
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
                setLoaded(false)
            })
    },[])

    useEffect(() => {
        
        console.log(pageAmount)
    }, [pageAmount])

    return (
        <div>
            {loaded && 
                personList.map(person => 
                <ListItem 
                    person={person}
                    key={person.name}
                />
                )
            }
        </div>
    )
}

export default Home;