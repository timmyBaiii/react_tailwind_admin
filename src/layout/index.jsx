import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div className='appWapper'>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;