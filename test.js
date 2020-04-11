const turbo = require('./models/turboFetch');


const test = async(city,state) => {
  if (city.length < 1) {
    const elections = await turbo.fetchTurboState(state.toLowerCase());
    return elections
  } else {
    const elections = await turbo.fetchTurbo(city.toLowerCase(), state.toLowerCase());
    return elections
  }
}

const stateTest = test('','la').then(elections => {
  console.log (elections[0].description === 'Louisiana Presidential Primary Election'),
  console.log (elections[0].type === 'presidential-primary'),
  console.log (elections[0].date === '2020-06-20T00:00:00Z')
})

const cityStateTest = test('midway','fl').then(elections => {
  console.log (elections[0].description === 'Midway Municipal Election'),
  console.log (elections[0].type === 'municipal'),
  console.log (elections[0].date === '2020-04-28T00:00:00Z')
})