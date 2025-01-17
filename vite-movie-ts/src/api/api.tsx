import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/'
});

export async function getMovieData(searchText:string) {
    await api.get('', {
        params:{
            apikey: '416ff46d',
            s: {searchText},
            type: 'movie'
        }
    })
    .then((response) => {
        return(response.data)
      })
}

export default api;