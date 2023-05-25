import axios from 'axios'

const fetchDefault = axios.create({
  baseURL: "https://v1.baseball.api-sports.io/",
});

export default fetchDefault;
