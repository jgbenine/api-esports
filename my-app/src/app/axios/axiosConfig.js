import axios from 'axios'

const fetchDefault = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers:{
    'x-rapidapi-host':'v3.football.api-sports.io',
    'x-rapidapi-key': 'a3663050d10164fbaa3d5c0e5ff68f3a',
  }
});

export default fetchDefault;
