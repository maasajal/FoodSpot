import "./Meal.css";
import { Card } from "react-bootstrap";
import RecipeModal from "../modal/RacipeModal";

const Meal = (props) => {
  return (
    <main>
      <Card className="meal-card">
        <Card.Img variant="top" src={props.strMealThumb} alt={props.strMeal} />
        <Card.Body>
          <Card.Subtitle>{props.strCategory} </Card.Subtitle>
          <Card.Title>{props.strMeal} </Card.Title>
          <RecipeModal />
        </Card.Body>
      </Card>
    </main>
  );
};

export default Meal;
