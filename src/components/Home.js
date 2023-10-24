import axios from "axios";
import { useEffect, useState } from "react";
import CardMeal from "./CardMeal";

export default function Home({favorites, setFavorites}) {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/random.php`
        }).then((response) => {
            setMeals(response.data.meals)
        });
    }, [])
    return(
        <div className="recipe-container">
            <div className="recipe-home-header">
                {/* <h2 className="home-header">Francis' <span className="nav-span">Recipes</span></h2> */}
                <h4>Random Recipe</h4>
            </div>
            <div className="recipe-random">
                {meals.map((meal) => {
                    return <CardMeal key={meal.idMeal} meal={meal} favorites={favorites} setFavorites={setFavorites}/>
                })}
            </div>
        </div>
    )
}