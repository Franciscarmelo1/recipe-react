import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function RecipeDetails({favorites, setFavorites}) {
    const {id} = useParams();
    const [meal, setMeal] = useState({})
    const ingredients = [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12, meal.strIngredient13,meal.strIngredient14, meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19, meal.strIngredient20]
    const measures = [meal.strMeasure1, meal.strMeasure2, meal.strMeasure3, meal.strMeasure4, meal.strMeasure5, meal.strMeasure6, meal.strMeasure7, meal.strMeasure8, meal.strMeasure9, meal.strMeasure10, meal.strMeasure11, meal.strMeasure12, meal.strMeasure13,meal.strMeasure14, meal.strMeasure15, meal.strMeasure16, meal.strMeasure17, meal.strMeasure18, meal.strMeasure19, meal.strMeasure20]
    
    const addToFavorites = (selectedMeal) => {
        setFavorites(favorites.concat([selectedMeal]))
    }
    const removeToFavorites = (meal) => {
        const newArr = favorites.filter((item)=>item.idMeal !== meal)
        setFavorites(newArr)
    }
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        }).then((response) => {
            setMeal(response.data.meals[0])
        })
    }, [])
    return (
        <div className="recipe-details-container">
            <div style={{position: 'relative', width:'100%', height:'100%'}}>
                <img src={meal.strMealThumb} alt="" className="recipe-details-image"/>
                <div className="shadow"></div>
                {favorites.length !== 0 && favorites.some((favorite) => favorite.idMeal === meal.idMeal) ? (
                    <Fab 
                        id="favorite-icon" 
                        variant="extended" 
                        value={meal.idMeal} 
                        onClick={()=>removeToFavorites(meal.idMeal)} 
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            zIndex: '3'
                    }}>
                        <span className="tooltip">Remove from Favorites</span>
                        <FavoriteIcon style={{color: 'red'}}/>
                    </Fab>
                ) : (
                    <Fab 
                        variant="extended" 
                        id="favorite-icon" 
                        value={meal} 
                        onClick={()=>addToFavorites(meal)} 
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            zIndex: '3'
                    }}>
                        <span className="tooltip">Add to Favorites</span>
                        <FavoriteBorderIcon />
                    </Fab>
                )}
            </div>
            <div>
                <h2 className="recipe-details-name">{meal.strMeal} <span className="recipe-details-area">({meal.strArea} dish)</span></h2>
                <p className="recipe-details-category" style={{marginBottom:'20px'}}>{meal.strCategory}</p>
                <h4>Instructions:</h4>
                <p className="recipe-details-text">{meal.strInstructions}</p>
                <h4 className="recipe-details-header">Youtube Link for Reference: <a href={meal.strYoutube} className="recipe-details-text">{meal.strYoutube}</a></h4>
                <h4 className="recipe-details-header">Ingredients: </h4>
                {ingredients.map((ing, index)=>{
                    if(ing !== "" && ing !== null){
                        return(
                            <p key={index} className="recipe-details-text" style={{marginLeft: '50px'}}>{ing} ({measures[index]})</p>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                })}
            </div>
        </div>
    )
}