import React from "react";
import '../pages/home/Home.css'

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                value={query}
                className="search-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;