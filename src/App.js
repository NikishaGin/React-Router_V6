import './App.css';
import {Routes, Route} from 'react-router-dom'
import {HomePages} from "./pages/HomePages";
import {AboutPage} from "./pages/AboutPage";
import {BlogPage} from "./pages/BlogPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Layout} from "./pages/Layout";
import {SinglePage} from "./pages/SinglePage";
import {CreatePost} from "./pages/CreatePost";
import {EditPost} from "./pages/EditPost";
import React from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePages/>}/>
                    <Route path={'about/*'} element={<AboutPage/>}>
                        <Route path={'contact'} element={<p>Contact</p>}/>
                        <Route path={'team'} element={<p>Team</p>}/>
                    </Route>
                    <Route path={'blog'} element={<BlogPage/>}/>
                    <Route path={'blog/:id'} element={<SinglePage/>}/>
                    <Route path={'blog/:id/edit'} element={<EditPost/>}/>
                    <Route path={'blog/new'} element={<CreatePost/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
