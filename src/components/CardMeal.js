import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CardMeal({meal, favorites, setFavorites}){
    const navigate = useNavigate();
    const addToFavorites = (selectedMeal) => {
        setFavorites(favorites.concat([selectedMeal]))
    }
    const removeToFavorites = (meal) => {
        const newArr = favorites.filter((item)=>item.idMeal !== meal)
        setFavorites(newArr)
    }
    return (
        <Card 
            id="recipe-card"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                transition: 'all 0.2s ease',
                textAlign: 'center',
                background: 'none',
                position: 'relative'
                // backgroundColor: '#3700b3'
            }}>
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
            <CardActionArea sx={{position: 'relative'}} >
                <CardMedia
                    component="img"
                    height="300"
                    image={meal.strMealThumb}
                    alt=""
                />
                <CardContent onClick={() => {navigate(`/recipe-details/${meal.idMeal}`)}} sx={{
                    position: 'absolute',
                    zIndex: '2',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#1212128c',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography gutterBottom variant="h5" component="div" 
                        sx={{
                            fontFamily: 'Russo One, sans-serif', 
                            color:'white'
                        }}>
                        {meal.strMeal}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}