import React from 'react';
import './header.css';
import cart from './logo/cart.png';
import user from './logo/man.png'
import home from './logo/house.png'
import search from './logo/search.png'
import category from './logo/category.png'


const Header = () => {
    return (
        <header className="headerContainer">
            <h1>Tech Zone</h1>
            <ul>
                <div className="search">
                    <input type="text" placeholder="Search........." />
                    <img className="icon" src={search} alt="Cart" />
                </div>
                <div className="link">
                    <div className="home">
                        <img className="icon" src={home} alt="Cart" />
                        <li>Home</li>
                    </div>
                    <div className="category">
                        <img className="icon" src={category} alt="Cart" />
                        <li>Category</li>
                    </div>
                </div>
                <div className="cart">
                    <img className="icon" src={cart} alt="Cart" />
                    <li id="carttitle">Cart</li>
                </div>
                <div className="account">
                    <img className="icon" src={user} alt="Cart" />
                    <li id="user">Login/Singup</li>
                </div>
            </ul>
        </header>
    )
}

export default Header
