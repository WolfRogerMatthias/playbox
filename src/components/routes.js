import React from 'react';
import {Home} from './Home';
import {Blog} from './Blog';


export const APP_ROUTES = [
    {
        path: '',
        element: <Home/>,
        label: 'Home',
        showInMenu: true,
        index: true,
    },
    {
        path: '/blog',
        element: <Blog/>,
        label: 'Blog',
        showInMenu: true,
        index: false,
    }
]