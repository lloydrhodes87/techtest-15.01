const axios = require('axios');

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api';

const fetchPerson = async(person) => {
 
    const  { data }  = await axios.get(`${BASE_URL}/people?search=${person}`).catch(err => console.log(err, 'ERROR'))
  
    return data;
}

export default fetchPerson;