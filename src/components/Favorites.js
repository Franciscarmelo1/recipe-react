import CardMeal from "./CardMeal"

export default function Favorites({favorites, setFavorites}){
    return (
        <div className="recipe-container">
            <div className="recipe-body">
                {favorites.length !== 0 ? 
                    favorites.map((favorite) => {
                        return <CardMeal key={favorite.idMeal} meal={favorite} favorites={favorites} setFavorites={setFavorites}/>
                    }) : (
                    <h2 style={{position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)'}}>Favorites is Empty!</h2>
                )}
            </div>
        </div>
    )
}