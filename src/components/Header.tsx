import React from 'react';
import { NavLink } from 'react-router';

export const Header = (): React.ReactElement => {
    return (
        <header className="header">
            <img className="header__logo" src="images/logo.svg" alt="Logo" />
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'><NavLink to="/">Home</NavLink></li>
                    <li className='header__nav-item'><NavLink to="/posts">Posts</NavLink></li>
                    <li className='header__nav-item'><NavLink to="/sign-in">Sign In</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}