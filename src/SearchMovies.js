import React from "react"
import "./style.css"

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Bladerunner 2049";
        
        const url = "https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false";
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input"
                    type="text" 
                    name="query"
                    placeholder="i.e. Bladerunner 2049"
                />
                <button className="button" type="submit">Search</button>
        </form>
    )      
}