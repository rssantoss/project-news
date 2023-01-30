import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import Admin from '../admin/Admin';
import News from '../news/News';
import RegisterAdm from '../admin/RegisterAdm';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/news' element={<News />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/register' element={<RegisterAdm />} />
        </Routes>
    )
}

export default Router;

