import React from 'react';

export const Header = (): React.ReactElement => {
    return (
        <header className="header">
            <img className="header__logo" src="images/logo.svg" alt="Logo" />
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'><a href="#">Home</a></li>
                    <li className='header__nav-item'><a href="#">Posts</a></li>
                    <li className='header__nav-item'><a href="#">Sign In</a></li>
                </ul>
            </nav>
        </header>
    )
}