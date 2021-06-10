import React from "react"
import "./style.css"

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Bladerunner 2049";
        
        const url = "https://api.themoviedb.org/3/movie/550?api_key=bea0e997a9ff807e35f4e2eaffdedaa7";
        
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