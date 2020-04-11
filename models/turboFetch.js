const fetch = require('node-fetch');

const fetchTurbo = async (city, state) => {
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`;

  const elections = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await elections.json();
  return data;
};

const fetchTurboState = async (state) => {
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}`;

  const elections = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await elections.json();
  return data;
};


module.exports = {
  fetchTurbo,
  fetchTurboState,
};
