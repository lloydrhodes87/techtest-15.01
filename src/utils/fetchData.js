const axios = require("axios");

const BASE_URL = "https://swapi.co/api";

const fetchData = async (page = 1) => {
  const { data } = await axios
    .get(`${BASE_URL}/people?page=${page}`)
    .catch(err => console.log(err, "ERROR"));
  return data;
};

export default fetchData;
