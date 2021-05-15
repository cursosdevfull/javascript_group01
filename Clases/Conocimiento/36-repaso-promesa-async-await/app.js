const zonePeople = document.getElementById('zonePeople');

const URL_API_STAR_WARS = 'https://swapi.dev/api/people/';

const getPlanetPeople = (homeworld) => {
  return fetch(homeworld).then((response) => response.json());
};

const showPeople = (data) => {
  const results = data.results;

  for (const result of results) {
    const row = `
      <tr>
        <td>${result.name}</td>
        <td>${result.eye_color}</td>
      </tr>
    `;
    zonePeople.innerHTML += row;
  }
};

const showError = () => {
  const row = `
  <tr>
    <td colspan="2">Ocurrió un error</td>
  </tr>
`;
  zonePeople.innerHTML = row;
};

const getPeopleStarWars = () => {
  return fetch(URL_API_STAR_WARS).then((response) => {
    return response.json();
  });
};

/* const response = getPeopleStarWars();
response.then(showPeople, (error) => {
  console.log(error);
}); */

/* getPeopleStarWars().then(showPeople, (error) => {
  console.log(error);
}); */

const start = async () => {
  try {
    const response = await getPeopleStarWars();
    showPeople(response);
    const responsePlanet = await getPlanetPeople(response.results[0].homeworld);
    console.log('Name of planet', responsePlanet.name);
  } catch (error) {
    showError();
  }

  /*   const promise = getPeopleStarWars();
  promise.then(showPeople); */

  /*   promise.catch((error) => {
    console.log(error);
  }); */
};

start();
