import { useEffect, useState } from "react";
import axios from 'axios';


function MoviesPortal(){
    const [searchInputText, setSearchInputText] = useState<string>('');
    const [enteredSearchText, setEnteredSearchText] = useState<string>('');
    const [movie, setMovie] = useState([]);

    function onSearchTextEnter(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setEnteredSearchText(searchInputText)
    };

    function searchTextChange(e: React.ChangeEvent<HTMLInputElement>){
        const text = e.currentTarget.value;
        setSearchInputText(text)
    };

    useEffect(() => {
        const fetchMovies = async() =>{
            const {data} = await axios.get(
                `http://www.omdbapi.com/?s=${enteredSearchText}&apikey=416ff46d`
                );
            if (data.Search){
                setMovie(data.Search);
            }
            else {
                console.log('Search does not exist... Showing raw JSON caught:')
                console.log(await axios.get(
                    `http://www.omdbapi.com/?s=${enteredSearchText}&apikey=416ff46d`
                    ));
                console.log('enteredsearchtext:' + enteredSearchText);
                console.log('searchinputtext:' + searchInputText);
            }
        };

        fetchMovies();
        console.log(movie);
    },[enteredSearchText]);

    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={onSearchTextEnter}>
                        <input 
                        name="movieName"
                        type="text" 
                        placeholder="Search for a Movie..."
                        className="form-control"
                        value={searchInputText} 
                        onChange={searchTextChange}
                        />
                    </form>
                </div>
            </div>
            {enteredSearchText}
        </>
    )
}

export default MoviesPortal;