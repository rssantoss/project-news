import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Author from '../author/Author';
import RegisterAct from '../author/RegisterAct';
import NewPage from '../test/NewPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Author />} />
            <Route path='/register' element={<RegisterAct />} />
            <Route path='/newPage' element={<NewPage />} />
        </Routes>
    )
}

export default Router;

