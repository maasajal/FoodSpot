import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import RecipeModal from "../modal/RacipeModal";
import "./FoodList.css";

const FoodList = (props) => {
  const reversed = [...props.newFood].reverse();
  return (
    <main>
      <Row xs={1} md={2} lg={3} xxl={4} className="food">
        {reversed.map((food) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={food.strMealThumb} alt={food.strMeal} />
              <Card.Body>
                <Card.Subtitle>{food.strCategory} </Card.Subtitle>
                <Card.Title> <h2>{food.strMeal}</h2> </Card.Title>
                <Card.Text>{food.strIngredient} </Card.Text>
                <RecipeModal />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};
export default FoodList;
