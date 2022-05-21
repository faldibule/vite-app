import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home';
import Welocome from '../Pages/Welocome';
const ParentRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welocome />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </BrowserRouter>
    );
};

export default ParentRoute;