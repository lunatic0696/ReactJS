import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

export async function getMovieData(searchText:string) {
    await api.get(`http://www.omdbapi.com/?s=${searchText}&apikey=416ff46d`)
    .then((response) => {
        return(response)
      })
}

export default api;