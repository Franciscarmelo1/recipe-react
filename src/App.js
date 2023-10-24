import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import "./css/style.css"
import RecipeDetails from "./components/RecipeDetails";
import Category from "./components/Category";
import Home from "./components/Home";
import { useState } from "react";
import Favorites from "./components/Favorites";

function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="home" element={<Home favorites={favorites} setFavorites={setFavorites}/>}></Route>
          <Route path="recipes" element={<Recipes favorites={favorites} setFavorites={setFavorites}/>}></Route>
          <Route path="category" element={<Category favorites={favorites} setFavorites={setFavorites}/>}></Route>
          <Route path="favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}></Route>
          <Route path="recipe-details/:id" element={<RecipeDetails favorites={favorites} setFavorites={setFavorites}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
