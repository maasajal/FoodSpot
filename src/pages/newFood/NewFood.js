import { useState, useEffect } from "react";
import FoodList from "../../components/newFoodList/FoodList";
import "./NewFood.css";
const firebaseApi = "https://food-spot-tre-default-rtdb.europe-west1.firebasedatabase.app/food-items.json";

const NewFood = () => {
  const [newFood, setFood] = useState([]);
  const fetchFood = async () => {
    const response = await fetch(firebaseApi);
    const data = await response.json();

    const fetchedFood = [];

    for (const key in data) {
      fetchedFood.push({
        idMeal: key,
        strMeal: data[key].strMeal,
        strCategory: data[key].strCategory,
        strMealThumb: data[key].strMealThumb,
        strIngredient: data[key].strIngredient,
      });
    }
    setFood(fetchedFood);
  };

  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  return (
    <>
      {newFood.length > 0 ? (
        <section>
          <FoodList newFood={newFood} />
        </section>
      ) : (
        <p className="food">
          You do not have any food item in your new food list yet!
        </p>
      )}
    </>
  );
};

export default NewFood;
