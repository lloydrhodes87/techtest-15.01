const filmMapper = film => {
  const films = {
    "https://swapi.co/api/films/1/": "A New Hope",
    "https://swapi.co/api/films/2/": "The Empire Strikes Back",
    "https://swapi.co/api/films/3/": "Return of the Jedi",
    "https://swapi.co/api/films/4/": "The Phantom Menace",
    "https://swapi.co/api/films/5/": "Attack of the Clones",
    "https://swapi.co/api/films/6/": "Revenge of the Sith",
    "https://swapi.co/api/films/7/": "The Force Awakens"
  };

  for (let key in films) {
    if (key === film) {
      return films[key];
    }
  }
  return;
};

export default filmMapper;
