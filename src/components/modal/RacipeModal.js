import { useState, useEffect } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";

const recipeItem = "www.themealdb.com/api/json/v1/1/lookup.php?i=";
const randomFoodApi = "https://www.themealdb.com/api/json/v1/1/random.php";

const RecipeModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipeById, setRecipeById] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipeById = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(randomFoodApi);
      if (!response.ok) {
        throw new Error("You have to fasting today!");
      }
      const data = await response.json();
      console.log(data);
      setRecipeById(data.meals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipeById();
  }, []);

  let content;

  if (error) {
    content = <p> {error} </p>;
  } else {
    content = (
      <>
        {recipeById
          ? recipeById.map((meal) => (
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <h2>How to cook {meal.strMeal} </h2>
                  <iframe
                    width="100%"
                    height="315"
                    title={`${meal.strMeal}`}
                    frameborder="0"
                    allowfullscreen
                    src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                      -11
                    )}`}
                  />
                  <h3>Meal Photo</h3>
                  <img src={meal.strMealThumb} alt="Meal view" /> <br /> <br />{" "}
                  <br />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h2>{meal.strMeal}</h2>
                  <p>Category: {meal.strCategory}</p>
                  <h3>Instructions:</h3>
                  <p> {meal.strInstructions} </p>
                  <h4>Ingredients: </h4>
                  <ul>
                    <li>{meal.strIngredient1}</li>
                    <li>{meal.strIngredient2}</li>
                    <li>{meal.strIngredient3}</li>
                    <li>{meal.strIngredient4}</li>
                    <li>{meal.strIngredient5}</li>
                    <li>{meal.strIngredient6}</li>
                    <li>{meal.strIngredient7}</li>
                    <li>{meal.strIngredient8}</li>
                    <li>{meal.strIngredient9}</li>
                    <li>{meal.strIngredient10}</li>
                    <li>{meal.strIngredient11}</li>
                    <li>{meal.strIngredient12}</li>
                    <li>{meal.strIngredient13}</li>
                    <li>{meal.strIngredient14}</li>
                    <li>{meal.strIngredient15}</li>
                    <li>{meal.strIngredient16}</li>
                    <li>{meal.strIngredient17}</li>
                    <li>{meal.strIngredient18}</li>
                    <li>{meal.strIngredient19}</li>
                    <li>{meal.strIngredient20}</li>
                  </ul>
                </Col>
              </Row>
            ))
          : " Loading......"}
      </>
    );
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Guide
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Learn how to cook this meal on our food recipe!
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="recipes">
            {isLoading ? (
              <section>
                <p>Loading...</p>
              </section>
            ) : (
              <> {content} </>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeModal;
