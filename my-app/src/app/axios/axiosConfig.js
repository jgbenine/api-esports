import axios from 'axios'

const fetchDefault = axios.create({
  baseURL: "https://v1.volleyball.api-sports.io",
  headers:{
    'x-rapidapi-host':'v1.volleyball.api-sports.io',
    'x-rapidapi-key': 'a3663050d10164fbaa3d5c0e5ff68f3a',
  }
});

export default fetchDefault;
