import React, { useState, useEffect } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar";
import RecipeCard from "../../components/RecipeCard";
import { GiChickenOven } from 'react-icons/gi';
import { GiKnifeFork } from 'react-icons/gi';
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    
    <main className="home-page">
      <div className="home-title">
        <h2>Let's Have A Recipe Tour <GiChickenOven/> <GiKnifeFork/></h2>
        <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
      
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results."}
      </div>
    </main>
  );
}

export default Home;
