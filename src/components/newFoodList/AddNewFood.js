import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodList.css";

const AddNewFood = (props) => {
  const strMealRef = useRef("");
  const strCategoryRef = useRef("");
  const strMealThumbRef = useRef("");
  const strIngredientRef = useRef("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const food = {
      strMeal: strMealRef.current.value,
      strCategory: strCategoryRef.current.value,
      strMealThumb: strMealThumbRef.current.value,
      strIngredient: strIngredientRef.current.value,
    };

    props.onAddNewFood(food);

    strMealRef.current.value = "";
    strCategoryRef.current.value = "";
    strMealThumbRef.current.value = "";
    strIngredientRef.current.value = "";
    navigate('/new-food');
  };

  return (
    <main>
      <form onSubmit={submitHandler} className="add-food">
        <div>
          <label htmlFor="title">Food Name: </label>
          <input
            id="title"
            ref={strMealRef}
            placeholder="enter food title"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="category">Category: </label>
          <input
            id="category"
            ref={strCategoryRef}
            placeholder="enter category"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="img">Food image: </label>
          <input
            type="file"
            id="img"
            ref={strMealThumbRef}
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea id="ingredients" ref={strIngredientRef} placeholder="enter ingredients" required />
        </div>{" "}
        <br />
        <button className="add-btn">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddNewFood;
