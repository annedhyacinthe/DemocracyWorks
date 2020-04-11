const turbo = require('../models/turboFetch');

const getElection = async (req, res) => {
  const { city, state } = req.body;
  console.log(city,state)
  city
  if (city.length < 1) {
    const elections = await turbo.fetchTurboState(state.toLowerCase());
    res.render('elections', { elections });
  } else {
    const elections = await turbo.fetchTurbo(city.toLowerCase(), state.toLowerCase());
    res.render('elections', { elections });
  }
};


module.exports = {
  getElection,
};
