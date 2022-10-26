import Meal from "./Meal";
import { Card } from "react-bootstrap";
import "./Meal.css";

const RandomMeal = (props) => {
  return (
    <>
      <h1>{props.dish} </h1>
      <h2>{props.ingredient} </h2>
      <p>{props.description}</p>
    </>
  );
};

export default RandomMeal;
