import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Admin from '../admin/Admin';
import RegisterAdm from '../admin/RegisterAdm';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/register' element={<RegisterAdm />} />
        </Routes>
    )
}

export default Router;

