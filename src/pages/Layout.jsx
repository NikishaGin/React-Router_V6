import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : ''

export const Layout = () => {
    return (
        <>
            <header>
                <NavLink className={setActive} to={'/'}>Home</NavLink>
                <NavLink className={setActive} to={'/blog'}>Blog</NavLink>
                <NavLink className={setActive} to={'/about'}>About</NavLink>
            </header>
            <main className={'container'}>
                <Outlet/>
            </main>
            <footer>2024</footer>
        </>
    );
};

