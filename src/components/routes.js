import {Home, Blog} from 'components';


export const APP_ROUTES = [
    {
        path: 'playbox/home',
        element: <Home/>,
        label: 'Home',
        showInMenu: true,
        index: true,
    },
    {
        path: 'playbox/blog',
        element: <Blog/>,
        label: 'Blog',
        showInMenu: true,
        index: false,
    }
]