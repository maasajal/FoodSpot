import '../pages/home/Home.css'
import Modal from './modal/Modal'


const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        
    } = recipe;
   
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a className="guide" href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Guide</a>   
                

            </div>
            
        </div>
    )
};

export default RecipeCard;