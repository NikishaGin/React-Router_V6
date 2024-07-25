import React from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom'

export const AboutPage = () => {
    return (
        <div>
            <h1>AboutPage</h1>

            <ul>
                <li><Link to={'contact'}>Contact</Link></li>
                <li><Link to={'team'}>Team</Link></li>
            </ul>
            <Outlet/>

            {/*<Routes>*/}
            {/*    <Route path={'contact'} element={<p>Contact</p>}/>*/}
            {/*    <Route path={'team'} element={<p>Team</p>}/>*/}
            {/*</Routes>*/}
        </div>
    );
};

