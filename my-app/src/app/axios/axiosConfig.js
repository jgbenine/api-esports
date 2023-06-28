import axios from 'axios'

const fetchDefault = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers:{
    'x-rapidapi-host':'v3.football.api-sports.io',
    'x-rapidapi-key': '3d874f8a7931092df5b0652af7ac25e5',
  }
});

export default fetchDefault;
