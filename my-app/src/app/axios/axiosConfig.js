import axios from 'axios'

const fetchDefault = axios.create({
  baseURL: "https://v1.basketball.api-sports.io",
});

export default fetchDefault;
