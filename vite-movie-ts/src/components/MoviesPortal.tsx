import { useEffect, useState } from "react";
import { getMovieData } from "../api/api";

function MoviesPortal(){
    const [searchInputText, setSearchInputText] = useState('');
    const [enteredSearchText, setEnteredSearchText] = useState('');
    const [movie, setMovie] = useState({});

    const onSearchTextEnter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredSearchText(searchInputText)
    };

    function searchTextChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearchInputText(event.currentTarget.value)
    };

    useEffect(() => {
       setMovie(getMovieData(enteredSearchText).)
       console.log(movie);
    },[enteredSearchText])

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