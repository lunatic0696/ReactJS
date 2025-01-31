import { useEffect, useState } from "react";
import axios from 'axios';


function MoviesPortal(){
    const [searchInputText, setSearchInputText] = useState('');
    const [enteredSearchText, setEnteredSearchText] = useState('');
    const [movie, setMovie] = useState([]);

    const onSearchTextEnter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredSearchText(searchInputText)
    };

    function searchTextChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearchInputText(event.currentTarget.value)
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
                console.log('searchtext:' + enteredSearchText);
                console.log(await axios.get(
                    `http://www.omdbapi.com/?s=${enteredSearchText}&apikey=416ff46d`
                    ))
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
                        type="text" placeholder="Search for a Movie..." className="form-control"
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