import React, { useState } from "react"
import "./style.css"

export default function SearchMovies() {
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/movie/550?api_key=bea0e997a9ff807e35f4e2eaffdedaa7
                    &language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results)
        } catch(err){
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
        </form>
    )      
}