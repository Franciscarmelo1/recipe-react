import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMeal from "./CardMeal";

export default function Recipes({favorites, setFavorites}) {
    const [country, setCountry] = useState('Canadian')
    const [meals, setMeals] = useState([])
    const [areas, setAreas] = useState([])
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        }).then((response) => {
            setMeals(response.data.meals)
        });
    }, [country])
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        }).then((response) => {
            setAreas(response.data.meals)
        })
    }, [])
    return(
        <div className="recipe-container">
            <div className="recipe-search">
                <InputLabel style={{color: 'white', fontFamily: 'Russo One'}}>Area:</InputLabel>
                <Select label="country" value={country} className="recipe-select"
                    onChange={(e) => {setCountry(e.target.value)}}>
                    {areas && areas.map((area, index)=>{
                        return <MenuItem key={index} value={area.strArea}>{area.strArea}</MenuItem>
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