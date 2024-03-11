import React from 'react';
import { HomeLayouts } from '../layouts/HomeLayout';
import { Header } from './Header';
import { Footer } from './Footer';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Post} from "../pages/Post";
import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";


function App() {
    return (
        <BrowserRouter>
                <HomeLayouts>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/post/:id" element={<Post />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>

                    <Footer />
                </HomeLayouts>

        </BrowserRouter>
);
}

export default App;
