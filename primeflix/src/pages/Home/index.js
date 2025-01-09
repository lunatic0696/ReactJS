import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

// URL DA API: /movie/now_playing?api_key=cfd7c0d84de2941640648444622bc787&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);
  const imgurl ='https://image.tmdb.org/t/p/original/';


  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "cfd7c0d84de2941640648444622bc787",
         language: "pt-BR",
         page: 1,
        }
      })

      //console.log(response.data.results);
      setFilmes(response.data.results.slice(0,10))

    }

    loadFilmes();

  }, [])

  return(
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) =>{
          let imgconcat = imgurl+filme.poster_path;
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={imgconcat} alt={filme.title} />
              <Link to={'/filme/${filme.id}'}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;