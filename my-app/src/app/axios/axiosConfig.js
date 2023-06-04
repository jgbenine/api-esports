import axios from 'axios';

const fetchDefault = (inputKey) => {
  return axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': inputKey,
    },
  });
};

export default fetchDefault;