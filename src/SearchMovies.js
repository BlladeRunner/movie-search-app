import React from "react"

export default function SearchMovies() {
    return (
        <div>
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
        </div>
    )    
}