import "../pages/home/Home.css";
import Modal from "./modal/Modal";
import RecipeModal from "./modal/RacipeModal";
import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        {/* <a
          className="guide"
          href={"https://www.themealdb.com/meal/" + idMeal}
          target="_blank"
        >
          Guide
        </a> */}
        <RecipeModal key={recipe.idMeal} recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeCard;
