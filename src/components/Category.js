import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMeal from "./CardMeal";

export default function Category({favorites, setFavorites}){
    const [target, setTarget] = useState("Beef")
    const [meals, setMeals] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${target}`
        }).then((response) => {
            setMeals(response.data.meals)
            console.log(response.data.meals)
        });
    }, [target])
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        }).then((response) => {
            setCategories(response.data.meals)
        })
    }, [])

    return (
        <div className="recipe-container">
            <div className="recipe-search">
                <InputLabel style={{color: 'white', fontFamily: 'Russo One'}}>Category:</InputLabel>
                <Select label="category" value={target} className="recipe-select"
                    onChange={(e) => {setTarget(e.target.value)}}>
                    {categories && categories.map((category, index)=>{
                        return <MenuItem key={index} value={category.strCategory}>{category.strCategory}</MenuItem>
                    })}
                </Select>
            </div>
            <div className="recipe-body">
                {meals.map((meal) => {
                    return <CardMeal key={meal.idMeal} meal={meal} favorites={favorites} setFavorites={setFavorites}/>
                })}
            </div>
        </div>
    )
}