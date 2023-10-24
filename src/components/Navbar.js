import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(){
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <div className="main-container">
            <div className="nav-container">
                <h2 className="home-header">Francis' <span className="nav-span">Recipes</span></h2>
                <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                    <li>
                        <Link to="home" onClick={() => toggleMenu()}>HOME</Link>
                    </li>
                    <li>
                        <Link to="recipes" onClick={() => toggleMenu()}>RECIPES</Link>
                    </li>
                    <li>
                        <Link to="category" onClick={() => toggleMenu()}>CATEGORY</Link>
                    </li>
                    <li>
                        <Link to="favorites" onClick={() => toggleMenu()}>FAVORITES</Link>
                    </li>
                </ul>
                <div className="hamburger-menu" onClick={() => toggleMenu()}>
                    <div className={`bar ${isActive ? 'active1' : ''}`}></div>
                    <div className={`bar ${isActive ? 'active2' : ''}`}></div>
                    <div className={`bar ${isActive ? 'active3' : ''}`}></div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}