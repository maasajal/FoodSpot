import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./TodayMeal.css";

import RandomMeal from "../../components/todayMeal/RandomMeal";
import Meal from "../../components/todayMeal/Meal";

const randomFoodApi = "https://www.themealdb.com/api/json/v1/1/random.php";
const randomApi = "https://random-data-api.com/api/food/random_food";

const TodayMeal = () => {
  const [food, setFood] = useState([]);
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomMeal();
    fetchRandomFood();
  }, []);

  const fetchRandomFood = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(randomFoodApi);
      if (!response.ok) {
        throw new Error("You have to fasting today!");
      }
      const data = await response.json();
      console.log(data);
      setFood(data.meals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchRandomMeal = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(randomApi);
      if (!response.ok) {
        throw new Error("You have to fasting today!");
      }
      const data = await response.json();
      console.log(data);
      setMeal(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content, mealContent;
  if (error) {
    content = <p>{error}</p>;
  } else {
    content = (
      <RandomMeal
        dish={meal?.dish}
        ingredient={meal?.ingredient}
        description={meal?.description}
      />
    );
  }
  if (error) {
    mealContent = <p> {error} </p>;
  } else {
    mealContent = (
      <>
        {food
          ? food.map((khabar) => (
              <Meal
                key={khabar.idMeal}
                strMealThumb={khabar.strMealThumb}
                strMeal={khabar.strMeal}
                strCategory={khabar.strCategory}
              />
            ))
          : " Loading......"}
      </>
    );
  }
  return (
    <main className="today-meal">
      <h1>😋 Are you hungry?</h1>
      <h2>Let's see what meal for you...</h2> <br />
      <br />
      <Row>
        <Col>
          <Button onClick={fetchRandomFood} className="random-meal-btn">
            Lottery Meal
          </Button>
          {isLoading ? (
            <section>
              <p>Loading...</p>
            </section>
          ) : (
            <> {mealContent} </>
          )}
        </Col>
        {/* <Col>
          <button onClick={fetchRandomMeal} className="random-meal-btn">
            Lottery Meal
          </button>
          {isLoading ? (
            <section>
              <p>Loading...</p>
            </section>
          ) : (
            <section> {content} </section>
          )}
        </Col> */}
      </Row>
    </main>
  );
};
export default TodayMeal;
