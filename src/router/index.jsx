import React from 'react';

// react
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// layout
import Layout from '@/layout/index.jsx';

// Components
import Login from '@/views/login/index.jsx';
import ErrorPage404 from '../views/errorPage/errorPage404';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 登入 */}
                <Route path='/' element={<Layout />}>
                    <Route path='/' index element={<Login />}></Route>
                </Route>

                {/* 404 頁面 */}
                <Route path='/404' element={<ErrorPage404 />}></Route>
                
                {/* 轉跳 404 頁面 */}
                <Route path='*' element={<Navigate to='/404' />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
